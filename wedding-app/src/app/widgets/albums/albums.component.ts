import { Component, OnInit, Input, HostListener, OnDestroy, AfterViewInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumOverviewService } from '../../data-access/album-overview/album-overview.service';
import { timeout } from 'q';
import { Location } from '@angular/common';
declare var $: any;
declare var pinchzoomer: any;

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit, OnDestroy, AfterViewChecked {
  imgUrl: any;
  eventName: string;
  albumData: any;
  index: number;
  click: boolean = false;
  pageUrl: string;
  lgScreen:number;
  albumUrl = 'http://ec2-52-66-182-119.ap-south-1.compute.amazonaws.com:8080/album?eventName=';
  currentImg: string;
  imgId: string;


  constructor(private route: ActivatedRoute,
    private albumService: AlbumOverviewService, private routes: Router, private location: Location) { }


  @HostListener('wheel', ['$event'])
  handleWheelEvent(event) {
    event.preventDefault();
  }

  ngAfterViewChecked() {
    //  $('.in').pinchzoomer();
  }


  ngOnInit() {
    $('body').addClass('modal-open');
    this.route.queryParamMap
      .subscribe(params => {
        // this.currentImg = params.get('url') ? params.get('url') : undefined;
        this.eventName = params.get('name');
        this.click = params.get('c') ? true : false;
        this.imgId = params.get('id') ? params.get('id') : undefined;
        this.fetchAlbumData();
      });

    $(window).resize(() => {
      this.reSizeImgCont();
    });
    this.pageUrl = location.href;
    this.reSizeImgCont();
  }

  fetchAlbumData() {


    this.albumService.getAlbumOverview(this.albumUrl + this.eventName).subscribe(data => {
      if (this.click) {
        this.albumData = data;
        this.currentImg = this.albumData.data[0].url;
        this.index = 0;
        this.imgId = this.albumData.data[this.index]._id;
        this.location.replaceState('/albums?name=' + this.eventName + '&url=' + this.albumData.data[this.index].url + '&id=' + this.albumData.data[this.index]._id);
        this.pageUrl = location.href;
        $('.preload').attr('src', this.albumData.data[1].url);
      } else {
        this.intialiseImageIndex(data);
      }

      setTimeout(() => {
        $('.in').pinchzoomer();
      }, 5);

    });
  }

  reSizeImgCont() {
    this.lgScreen = window.innerWidth > 980 ? 85 : 0;
    $('.content-block').height(window.innerHeight - this.lgScreen );
  }

  intialiseImageIndex(data) {
    for (const index in data.data) {
      if (data.data[index]._id === this.imgId) {
        this.albumData = data;
        console.log(index);
        this.index = parseInt(index);
      }
    }
    this.albumData = data;
    this.currentImg = this.albumData.data[this.index].url;
    $('.preload').attr('src', this.albumData.data[this.index + 1].url);

  }


  nextImage() {
    if (this.albumData.data.length > (this.index + 1)) {
      this.imgId = this.albumData.data[this.index + 1]._id;
      this.location.replaceState('/albums?name=' + this.eventName + '&url=' + this.albumData.data[this.index + 1].url + '&id=' + this.albumData.data[this.index + 1]._id);
      this.pageUrl = location.href;
      $('.img1' + this.index).fadeOut(550, () => {
        $('.img1' + this.index).attr('src', this.albumData.data[this.index + 1].url);
        this.index = this.index + 1;
      }).fadeIn(800);
    }
  }

  prevImage() {
    if (this.index >= 1) {
      this.location.replaceState('/albums?name=' + this.eventName + '&url=' + this.albumData.data[this.index - 1].url + '&id=' + this.albumData.data[this.index - 1]._id);
      this.pageUrl = location.href;
      $('.img1' + this.index).fadeOut(550, () => {
        // $('.in').css('transform', 'matrix(1, 0, 0, 1, 0, 0)');
        $('.img1' + this.index).attr('src', this.albumData.data[this.index - 1].url);
        this.index = this.index - 1;
      }).fadeIn(1000);
    }
  }

  ngOnDestroy() {
    $('body').removeClass('modal-open');
  }















  // IMAGE MANIPULATION and MAINTAIN ASPECT RATIO
  resizeImageWithAspectRatio() {
    let maxWidth = $('.img-container-album').width(); // Max width for the image
    let maxHeight = $('.img-container-album').height();    // Max height for the image
    let ratio = 0;  // Used for aspect ratio
    let width = $('.img1').width();    // Current image width
    let height = $('.img1').height();  // Current image height

    // Check if the current width is larger than the max
    if (width >= maxWidth) {
      ratio = maxWidth / width;   // get ratio for scaling image
      $('.img1').css('width', maxWidth); // Set new width
      $('.img1').css("height", height * ratio);  // Scale height based on ratio
      height = height * ratio;    // Reset height to match scaled image
      width = width * ratio;    // Reset width to match scaled image
    }

    // Check if current height is larger than max
    if (height >= maxHeight) {
      ratio = maxHeight / height; // get ratio for scaling image
      //$('.img1').css("height", );   // Set new height
      $('.img1').css("width", width * ratio);    // Scale width based on ratio
      width = width * ratio;    // Reset width to match scaled image
    }

  }

  zoomImg() {

    // zoom();

    // /* @-<zoom ********************************************************************/
    // /******************************************************************************/
    // function zoom(classNames = {}, settings = {}) {
    //     /* Settings */
    //     var C_scaleDefault = settings["scaleDefault"] || 2; // Used on doubleclick, doubletap and resize
    //     var C_scaleDifference = settings["scaleDifference"] || 0.5; // Used on wheel zoom
    //     var C_scaleMax = settings["scaleMax"] || 10;
    //     var C_scaleMin = settings["scaleMin"] || 1;

    //     /* Selectors */
    //     var _active = classNames["active"] || "active";
    //     var _dataScale = "data-scale";
    //     var _dataTranslateX = "data-translate-x";
    //     var _dataTranslateY = "data-translate-y";
    //     var _transition = classNames["transition"] || "transition";
    //     var _visible = classNames["visible"] || "visible";
    //     var $container;
    //     var $element;
    //     var $zoom = document.getElementsByClassName(classNames["zoom"] || "zoom");

    //     /* Helpers */
    //     var capture = false;
    //     var doubleClickMonitor = [null];
    //     var containerHeight;
    //     var containerWidth;
    //     var containerOffsetX;
    //     var containerOffsetY;
    //     var initialScale;
    //     var elementHeight;
    //     var elementWidth;
    //     var heightDifference;
    //     var initialOffsetX;
    //     var initialOffsetY;
    //     var initialPinchDistance;
    //     var initialPointerOffsetX;
    //     var initialPointerOffsetX2;
    //     var initialPointerOffsetY;
    //     var initialPointerOffsetY2;
    //     var limitOffsetX;
    //     var limitOffsetY;
    //     var mousemoveCount = 0;
    //     var offset;
    //     var pinchOffsetX;
    //     var pinchOffsetY;
    //     var pointerOffsetX;
    //     var pointerOffsetX2;
    //     var pointerOffsetY;
    //     var pointerOffsetY2;
    //     var scaleDirection;
    //     var scaleDifference;
    //     var targetOffsetX;
    //     var targetOffsetY;
    //     var targetPinchDistance;
    //     var targetScale;
    //     var touchable = false;
    //     var touchCount;
    //     var touchmoveCount = 0;
    //     var doubleTapMonitor = [null];
    //     var widthDifference;

    //     /* EVENT - DOM ready ********************************************************/
    //     /****************************************************************************/
    //     for (var i = 0; i < $zoom.length; i++) {
    //         /* Initialize selectors */
    //         $container = $zoom[i];
    //         $element = $container.children[0];

    //         /* Set attributes */
    //         $element.setAttribute(_dataScale, 1);
    //         $element.setAttribute(_dataTranslateX, 0);
    //         $element.setAttribute(_dataTranslateY, 0);
    //     }

    //     /* EVENT - load - window ****************************************************/
    //     /****************************************************************************/
    //     window.addEventListener("load", function() {
    //         /* Wait for images to be loaded */
    //         for (var i = 0; i < $zoom.length; i++) {
    //             /* Initialize selectors */
    //             $container = $zoom[i];
    //             $element = $container.children[0];

    //             addClass($element, _visible);
    //         }

    //         /* EVENT - resize - window ************************************************/
    //         /**************************************************************************/
    //         window.addEventListener("resize", function() {
    //             for (var i = 0; i < $zoom.length; i++) {
    //                 /* Initialize selectors */
    //                 $container = $zoom[i];
    //                 $element = $container.children[0];

    //                 if (hasClass($container, _active) === false) {
    //                     continue;
    //                 }

    //                 /* Initialize helpers */
    //                 containerHeight = $container.clientHeight;
    //                 containerWidth = $container.clientWidth;
    //                 elementHeight = $element.clientHeight;
    //                 elementWidth = $element.clientWidth;
    //                 initialOffsetX = parseFloat($element.getAttribute(_dataTranslateX));
    //                 initialOffsetY = parseFloat($element.getAttribute(_dataTranslateY));
    //                 targetScale = C_scaleDefault;
    //                 limitOffsetX = ((elementWidth * targetScale) - containerWidth) / 2;
    //                 limitOffsetY = ((elementHeight * targetScale) - containerHeight) / 2;
    //                 targetOffsetX = (elementWidth * targetScale) > containerWidth ? minMax(initialOffsetX, limitOffsetX * (-1), limitOffsetX) : 0;
    //                 targetOffsetY = (elementHeight * targetScale) > containerHeight ? minMax(initialOffsetY, limitOffsetY * (-1), limitOffsetY) : 0;

    //                 if (targetScale === 1) {
    //                     removeClass($container, _active);
    //                 }

    //                 /* Set attributes */
    //                 $element.setAttribute(_dataScale, targetScale);
    //                 $element.setAttribute(_dataTranslateX, targetOffsetX);
    //                 $element.setAttribute(_dataTranslateY, targetOffsetY);

    //                 /* @->moveScaleElement */
    //                 moveScaleElement($element, targetOffsetX + "px", targetOffsetY + "px", targetScale);
    //             }
    //         });
    //     });

    //     /* EVENT - mousedown - $zoom ************************************************/
    //     /* **************************************************************************/
    //     massAddEventListener($zoom, "mousedown", mouseDown);

    //     /* EVENT - mouseenter - $zoom ***********************************************/
    //     /* **************************************************************************/
    //     massAddEventListener($zoom, "mouseenter", mouseEnter);

    //     /* EVENT - mouseleave - $zoom ***********************************************/
    //     /* **************************************************************************/
    //     massAddEventListener($zoom, "mouseleave", mouseLeave);

    //     /* EVENT - mousemove - document *********************************************/
    //     /****************************************************************************/
    //     document.addEventListener("mousemove", mouseMove);

    //     /* EVENT - mouseup - document ***********************************************/
    //     /****************************************************************************/
    //     document.addEventListener("mouseup", mouseUp);

    //     /* EVENT - touchstart - document ********************************************/
    //     /****************************************************************************/
    //     document.addEventListener("touchstart", function() {
    //         touchable = true;
    //     });

    //     /* EVENT - touchstart - $zoom ***********************************************/
    //     /* **************************************************************************/
    //     massAddEventListener($zoom, "touchstart", touchStart);

    //     /* EVENT - touchmove - document *********************************************/
    //     /****************************************************************************/
    //     document.addEventListener("touchmove", touchMove);

    //     /* EVENT - touchend - document **********************************************/
    //     /****************************************************************************/
    //     document.addEventListener("touchend", touchEnd);

    //     /* EVENT - wheel - $zoom ****************************************************/
    //     /****************************************************************************/
    //     massAddEventListener($zoom, "wheel", wheel);

    //     /* @-<mouseEnter ************************************************************/
    //     /****************************************************************************/
    //     function mouseEnter() {
    //         disableScroll();
    //     }

    //     /* @-<mouseLeave ************************************************************/
    //     /****************************************************************************/
    //     function mouseLeave() {
    //         enableScroll();
    //     }

    //     /* @-<mouseDown *************************************************************/
    //     /****************************************************************************/
    //     function mouseDown(e) {
    //         e.preventDefault();

    //         if (touchable === true || e.which !== 1) {
    //             return false;
    //         }

    //         /* Initialize selectors */
    //         $container = this;
    //         $element = this.children[0];

    //         /* Initialize helpers */
    //         initialPointerOffsetX = e.clientX;
    //         initialPointerOffsetY = e.clientY;

    //         /* Doubleclick */
    //         if (doubleClickMonitor[0] === null) {
    //             doubleClickMonitor[0] = e.target;
    //             doubleClickMonitor[1] = initialPointerOffsetX;
    //             doubleClickMonitor[2] = initialPointerOffsetY;

    //             setTimeout(function() {
    //                 doubleClickMonitor = [null];
    //             }, 300);
    //         } else if (doubleClickMonitor[0] === e.target && mousemoveCount <= 5 && isWithinRange(initialPointerOffsetX, doubleClickMonitor[1] - 10, doubleClickMonitor[1] + 10) === true && isWithinRange(initialPointerOffsetY, doubleClickMonitor[2] - 10, doubleClickMonitor[2] + 10) === true) {
    //             addClass($element, _transition);

    //             if (hasClass($container, _active) === true) {
    //                 /* Set attributes */
    //                 $element.setAttribute(_dataScale, 1);
    //                 $element.setAttribute(_dataTranslateX, 0);
    //                 $element.setAttribute(_dataTranslateY, 0);

    //                 removeClass($container, _active);

    //                 /* @->moveScaleElement */
    //                 moveScaleElement($element, 0, 0, 1);
    //             } else {
    //                 /* Set attributes */
    //                 $element.setAttribute(_dataScale, C_scaleDefault);
    //                 $element.setAttribute(_dataTranslateX, 0);
    //                 $element.setAttribute(_dataTranslateY, 0);

    //                 addClass($container, _active);

    //                 /* @->moveScaleElement */
    //                 moveScaleElement($element, 0, 0, C_scaleDefault);
    //             }

    //             setTimeout(function()
    //             {
    //                 removeClass($element, _transition);
    //             }, 200);

    //             doubleClickMonitor = [null];
    //             return false;
    //         }

    //         /* Initialize helpers */
    //         offset = $container.getBoundingClientRect();
    //         containerOffsetX = offset.left;
    //         containerOffsetY = offset.top;
    //         containerHeight = $container.clientHeight;
    //         containerWidth = $container.clientWidth
    //         elementHeight = $element.clientHeight;
    //         elementWidth = $element.clientWidth;
    //         initialOffsetX = parseFloat($element.getAttribute(_dataTranslateX));
    //         initialOffsetY = parseFloat($element.getAttribute(_dataTranslateY));
    //         initialScale = minMax(parseFloat($element.getAttribute(_dataScale)), C_scaleMin, C_scaleMax);

    //         mousemoveCount = 0;

    //         /* Set capture */
    //         capture = true;
    //     }

    //     /* @-<mouseMove *************************************************************/
    //     /****************************************************************************/
    //     function mouseMove(e) {
    //         if (touchable === true || capture === false) {
    //             return false;
    //         }

    //         /* Initialize helpers */
    //         pointerOffsetX = e.clientX;
    //         pointerOffsetY = e.clientY;
    //         targetScale = initialScale;
    //         limitOffsetX = ((elementWidth * targetScale) - containerWidth) / 2;
    //         limitOffsetY = ((elementHeight * targetScale) - containerHeight) / 2;
    //         targetOffsetX = (elementWidth * targetScale) <= containerWidth ? 0 : minMax(pointerOffsetX - (initialPointerOffsetX - initialOffsetX), limitOffsetX * (-1), limitOffsetX);
    //         targetOffsetY = (elementHeight * targetScale) <= containerHeight ? 0 : minMax(pointerOffsetY - (initialPointerOffsetY - initialOffsetY), limitOffsetY * (-1), limitOffsetY);
    //         mousemoveCount++;

    //         if (Math.abs(targetOffsetX) === Math.abs(limitOffsetX)) {
    //             initialOffsetX = targetOffsetX;
    //             initialPointerOffsetX = pointerOffsetX;
    //         }

    //         if (Math.abs(targetOffsetY) === Math.abs(limitOffsetY)) {
    //             initialOffsetY = targetOffsetY;
    //             initialPointerOffsetY = pointerOffsetY;
    //         }

    //         /* Set attributes */
    //         $element.setAttribute(_dataScale, targetScale);
    //         $element.setAttribute(_dataTranslateX, targetOffsetX);
    //         $element.setAttribute(_dataTranslateY, targetOffsetY);

    //         /* @->moveScaleElement */
    //         moveScaleElement($element, targetOffsetX + "px", targetOffsetY + "px", targetScale);
    //     }

    //     /* @-<mouseUp ***************************************************************/
    //     /****************************************************************************/
    //     function mouseUp() {
    //         if (touchable === true || capture === false) {
    //             return false;
    //         }

    //         /* Unset capture */
    //         capture = false;
    //     }

    //     /* @-<touchStart ************************************************************/
    //     /****************************************************************************/
    //     function touchStart(e) {
    //         e.preventDefault();

    //         if (e.touches.length > 2) {
    //             return false;
    //         }

    //         /* Initialize selectors */
    //         $container = this;
    //         $element = this.children[0];

    //         /* Initialize helpers */
    //         offset = $container.getBoundingClientRect();
    //         containerOffsetX = offset.left;
    //         containerOffsetY = offset.top;
    //         containerHeight = $container.clientHeight;
    //         containerWidth = $container.clientWidth;
    //         elementHeight = $element.clientHeight;
    //         elementWidth = $element.clientWidth;
    //         initialPointerOffsetX = e.touches[0].clientX;
    //         initialPointerOffsetY = e.touches[0].clientY;
    //         initialScale = minMax(parseFloat($element.getAttribute(_dataScale)), C_scaleMin, C_scaleMax);
    //         touchCount = e.touches.length;

    //         if (touchCount === 1) /* Single touch */ {
    //             /* Doubletap */
    //             if (doubleTapMonitor[0] === null) {
    //                 doubleTapMonitor[0] = e.target;
    //                 doubleTapMonitor[1] = initialPointerOffsetX;
    //                 doubleTapMonitor[2] = initialPointerOffsetY;

    //                 setTimeout(function() {
    //                     doubleTapMonitor = [null];
    //                 }, 300);
    //             } else if (doubleTapMonitor[0] === e.target && touchmoveCount <= 1 && isWithinRange(initialPointerOffsetX, doubleTapMonitor[1] - 10, doubleTapMonitor[1] + 10) === true && isWithinRange(initialPointerOffsetY, doubleTapMonitor[2] - 10, doubleTapMonitor[2] + 10) === true) {
    //                 addClass($element, _transition);

    //                 if (hasClass($container, _active) === true) {
    //                     /* Set attributes */
    //                     $element.setAttribute(_dataScale, 1);
    //                     $element.setAttribute(_dataTranslateX, 0);
    //                     $element.setAttribute(_dataTranslateY, 0);

    //                     removeClass($container, _active);

    //                     /* @->moveScaleElement */
    //                     moveScaleElement($element, 0, 0, 1);
    //                 } else {
    //                     /* Set attributes */
    //                     $element.setAttribute(_dataScale, C_scaleDefault);
    //                     $element.setAttribute(_dataTranslateX, 0);
    //                     $element.setAttribute(_dataTranslateY, 0);

    //                     addClass($container, _active);

    //                     /* @->moveScaleElement */
    //                     moveScaleElement($element, 0, 0, C_scaleDefault);
    //                 }

    //                 setTimeout(function()
    //                 {
    //                     removeClass($element, _transition);
    //                 }, 200);

    //                 doubleTapMonitor = [null];
    //                 return false;
    //             }

    //             /* Initialize helpers */
    //             initialOffsetX = parseFloat($element.getAttribute(_dataTranslateX));
    //             initialOffsetY = parseFloat($element.getAttribute(_dataTranslateY));
    //         } else if (touchCount === 2) /* Pinch */ {
    //             /* Initialize helpers */
    //             initialOffsetX = parseFloat($element.getAttribute(_dataTranslateX));
    //             initialOffsetY = parseFloat($element.getAttribute(_dataTranslateY));
    //             initialPointerOffsetX2 = e.touches[1].clientX;
    //             initialPointerOffsetY2 = e.touches[1].clientY;
    //             pinchOffsetX = (initialPointerOffsetX + initialPointerOffsetX2) / 2;
    //             pinchOffsetY = (initialPointerOffsetY + initialPointerOffsetY2) / 2;
    //             initialPinchDistance = Math.sqrt(((initialPointerOffsetX - initialPointerOffsetX2) * (initialPointerOffsetX - initialPointerOffsetX2)) + ((initialPointerOffsetY - initialPointerOffsetY2) * (initialPointerOffsetY - initialPointerOffsetY2)));
    //         }

    //         touchmoveCount = 0;

    //         /* Set capture */
    //         capture = true;
    //     }

    //     /* @-<touchMove *************************************************************/
    //     /****************************************************************************/
    //     function touchMove(e) {
    //         e.preventDefault();

    //         if (capture === false) {
    //             return false;
    //         }

    //         /* Initialize helpers */
    //         pointerOffsetX = e.touches[0].clientX;
    //         pointerOffsetY = e.touches[0].clientY;
    //         touchCount = e.touches.length;
    //         touchmoveCount++;

    //         if (touchCount > 1) /* Pinch */ {
    //             pointerOffsetX2 = e.touches[1].clientX;
    //             pointerOffsetY2 = e.touches[1].clientY;
    //             targetPinchDistance = Math.sqrt(((pointerOffsetX - pointerOffsetX2) * (pointerOffsetX - pointerOffsetX2)) + ((pointerOffsetY - pointerOffsetY2) * (pointerOffsetY - pointerOffsetY2)));

    //             if (initialPinchDistance === null) {
    //                 initialPinchDistance = targetPinchDistance;
    //             }

    //             if (Math.abs(initialPinchDistance - targetPinchDistance) >= 1) {
    //                 /* Initialize helpers */
    //                 targetScale = minMax(targetPinchDistance / initialPinchDistance * initialScale, C_scaleMin, C_scaleMax);
    //                 limitOffsetX = ((elementWidth * targetScale) - containerWidth) / 2;
    //                 limitOffsetY = ((elementHeight * targetScale) - containerHeight) / 2;
    //                 scaleDifference = targetScale - initialScale;
    //                 targetOffsetX = (elementWidth * targetScale) <= containerWidth ? 0 : minMax(initialOffsetX - ((((((pinchOffsetX - containerOffsetX) - (containerWidth / 2)) - initialOffsetX) / (targetScale - scaleDifference))) * scaleDifference), limitOffsetX * (-1), limitOffsetX);
    //                 targetOffsetY = (elementHeight * targetScale) <= containerHeight ? 0 : minMax(initialOffsetY - ((((((pinchOffsetY - containerOffsetY) - (containerHeight / 2)) - initialOffsetY) / (targetScale - scaleDifference))) * scaleDifference), limitOffsetY * (-1), limitOffsetY);

    //                 if (targetScale > 1) {
    //                     addClass($container, _active);
    //                 } else {
    //                     removeClass($container, _active);
    //                 }

    //                 /* @->moveScaleElement */
    //                 moveScaleElement($element, targetOffsetX + "px", targetOffsetY + "px", targetScale);

    //                 /* Initialize helpers */
    //                 initialPinchDistance = targetPinchDistance;
    //                 initialScale = targetScale;
    //                 initialOffsetX = targetOffsetX;
    //                 initialOffsetY = targetOffsetY;
    //             }
    //         } else /* Single touch */ {
    //             /* Initialize helpers */
    //             targetScale = initialScale;
    //             limitOffsetX = ((elementWidth * targetScale) - containerWidth) / 2;
    //             limitOffsetY = ((elementHeight * targetScale) - containerHeight) / 2;
    //             targetOffsetX = (elementWidth * targetScale) <= containerWidth ? 0 : minMax(pointerOffsetX - (initialPointerOffsetX - initialOffsetX), limitOffsetX * (-1), limitOffsetX);
    //             targetOffsetY = (elementHeight * targetScale) <= containerHeight ? 0 : minMax(pointerOffsetY - (initialPointerOffsetY - initialOffsetY), limitOffsetY * (-1), limitOffsetY);

    //             if (Math.abs(targetOffsetX) === Math.abs(limitOffsetX)) {
    //                 initialOffsetX = targetOffsetX;
    //                 initialPointerOffsetX = pointerOffsetX;
    //             }

    //             if (Math.abs(targetOffsetY) === Math.abs(limitOffsetY)) {
    //                 initialOffsetY = targetOffsetY;
    //                 initialPointerOffsetY = pointerOffsetY;
    //             }

    //             /* Set attributes */
    //             $element.setAttribute(_dataScale, initialScale);
    //             $element.setAttribute(_dataTranslateX, targetOffsetX);
    //             $element.setAttribute(_dataTranslateY, targetOffsetY);

    //             /* @->moveScaleElement */
    //             moveScaleElement($element, targetOffsetX + "px", targetOffsetY + "px", targetScale);
    //         }
    //     }

    //     /* @-<touchEnd **************************************************************/
    //     /****************************************************************************/
    //     function touchEnd(e) {
    //         touchCount = e.touches.length;

    //         if (capture === false) {
    //             return false;
    //         }

    //         if (touchCount === 0) /* No touch */ {
    //             /* Set attributes */
    //             $element.setAttribute(_dataScale, initialScale);
    //             $element.setAttribute(_dataTranslateX, targetOffsetX);
    //             $element.setAttribute(_dataTranslateY, targetOffsetY);

    //             initialPinchDistance = null;
    //             capture = false;
    //         } else if (touchCount === 1) /* Single touch */ {
    //             initialPointerOffsetX = e.touches[0].clientX;
    //             initialPointerOffsetY = e.touches[0].clientY;
    //         } else if (touchCount > 1) /* Pinch */ {
    //             initialPinchDistance = null;
    //         }
    //     }

    //     /* @-<wheel *****************************************************************/
    //     /****************************************************************************/
    //     function wheel(e) {
    //         /* Initialize selectors */
    //         $container = this;
    //         $element = this.children[0];

    //         /* Initialize helpers */
    //         offset = $container.getBoundingClientRect();
    //         containerHeight = $container.clientHeight;
    //         containerWidth = $container.clientWidth;
    //         elementHeight = $element.clientHeight;
    //         elementWidth = $element.clientWidth;
    //         containerOffsetX = offset.left;
    //         containerOffsetY = offset.top;
    //         initialScale = minMax(parseFloat($element.getAttribute(_dataScale), C_scaleMin, C_scaleMax));
    //         initialOffsetX = parseFloat($element.getAttribute(_dataTranslateX));
    //         initialOffsetY = parseFloat($element.getAttribute(_dataTranslateY));
    //         pointerOffsetX = e.clientX;
    //         pointerOffsetY = e.clientY;
    //         scaleDirection = e.deltaY < 0 ? 1 : -1;
    //         scaleDifference = C_scaleDifference * scaleDirection;
    //         targetScale = initialScale + scaleDifference;

    //         /* Prevent scale overflow */
    //         if (targetScale < C_scaleMin || targetScale > C_scaleMax) {
    //             return false;
    //         }

    //         /* Set offset limits */
    //         limitOffsetX = ((elementWidth * targetScale) - containerWidth) / 2;
    //         limitOffsetY = ((elementHeight * targetScale) - containerHeight) / 2;

    //         if (targetScale <= 1) {
    //             targetOffsetX = 0;
    //             targetOffsetY = 0;
    //         } else {
    //             /* Set target offsets */
    //             targetOffsetX = (elementWidth * targetScale) <= containerWidth ? 0 : minMax(initialOffsetX - ((((((pointerOffsetX - containerOffsetX) - (containerWidth / 2)) - initialOffsetX) / (targetScale - scaleDifference))) * scaleDifference), limitOffsetX * (-1), limitOffsetX);
    //             targetOffsetY = (elementHeight * targetScale) <= containerHeight ? 0 : minMax(initialOffsetY - ((((((pointerOffsetY - containerOffsetY) - (containerHeight / 2)) - initialOffsetY) / (targetScale - scaleDifference))) * scaleDifference), limitOffsetY * (-1), limitOffsetY);
    //         }

    //         if (targetScale > 1) {
    //             addClass($container, _active);
    //         } else {
    //             removeClass($container, _active);
    //         }

    //         /* Set attributes */
    //         $element.setAttribute(_dataScale, targetScale);
    //         $element.setAttribute(_dataTranslateX, targetOffsetX);
    //         $element.setAttribute(_dataTranslateY, targetOffsetY);

    //         /* @->moveScaleElement */
    //         moveScaleElement($element, targetOffsetX + "px", targetOffsetY + "px", targetScale);
    //     }
    // }

    // /* Library ********************************************************************/
    // /******************************************************************************/

    // /* @-<addClass ****************************************************************/
    // /******************************************************************************/
    // function addClass($element, targetClass) {
    //     if (hasClass($element, targetClass) === false) {
    //         $element.className += " " + targetClass;
    //     }
    // }

    // /* @-<disableScroll ***********************************************************/
    // /******************************************************************************/
    // function disableScroll() {
    //     if (window.addEventListener) // older FF
    //     {
    //         window.addEventListener('DOMMouseScroll', preventDefault, false);
    //     }

    //     window.onwheel = preventDefault; // modern standard
    //     window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    //     window.ontouchmove = preventDefault; // mobile
    //     document.onkeydown = preventDefaultForScrollKeys;
    // }

    // /* @-<enableScroll ************************************************************/
    // /******************************************************************************/
    // function enableScroll() {
    //     if (window.removeEventListener) {
    //         window.removeEventListener('DOMMouseScroll', preventDefault, false);
    //     }

    //     window.onmousewheel = document.onmousewheel = null;
    //     window.onwheel = null;
    //     window.ontouchmove = null;
    //     document.onkeydown = null;
    // }

    // /* @isWithinRange *************************************************************/
    // /******************************************************************************/
    // function isWithinRange(value, min, max) {
    //     if (value >= min && value <= max) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    // /* @hasClass ******************************************************************/
    // /******************************************************************************/
    // function hasClass($element, targetClass) {
    //     var rgx = new RegExp("(?:^|\\s)" + targetClass + "(?!\\S)", "g");

    //     if ($element.className.match(rgx)) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    // /* @-<massAddEventListener ****************************************************/
    // /******************************************************************************/
    // function massAddEventListener($elements, event, customFunction) {
    //     var useCapture = useCapture || false;

    //     for (var i = 0; i < $elements.length; i++) {
    //         $elements[i].addEventListener(event, customFunction, useCapture);
    //     }
    // }

    // /* @-<minMax ******************************************************************/
    // /******************************************************************************/
    // function minMax(value, min, max) {
    //     if (value < min) {
    //         value = min;
    //     } else if (value > max) {
    //         value = max;
    //     }

    //     return value;
    // }

    // /* @-<moveScaleElement ********************************************************/
    // /******************************************************************************/
    // function moveScaleElement($element, targetOffsetX, targetOffsetY, targetScale) {
    //     $element.style.cssText = "-moz-transform : translate(" + targetOffsetX + ", " + targetOffsetY + ") scale(" + targetScale + "); -ms-transform : translate(" + targetOffsetX + ", " + targetOffsetY + ") scale(" + targetScale + "); -o-transform : translate(" + targetOffsetX + ", " + targetOffsetY + ") scale(" + targetScale + "); -webkit-transform : translate(" + targetOffsetX + ", " + targetOffsetY + ") scale(" + targetScale + "); transform : translate3d(" + targetOffsetX + ", " + targetOffsetY + ", 0) scale3d(" + targetScale + ", " + targetScale + ", 1);";
    // }

    // /* @-<preventDefault **********************************************************/
    // /******************************************************************************/
    // function preventDefault(e) {
    //     e = e || window.event;

    //     if (e.preventDefault) {
    //         e.preventDefault();
    //     }

    //     e.returnValue = false;
    // }

    // /* @preventDefaultForScrollKeys ***********************************************/
    // /******************************************************************************/
    // function preventDefaultForScrollKeys(e) {
    //     var keys = {
    //         37: 1,
    //         38: 1,
    //         39: 1,
    //         40: 1
    //     };

    //     if (keys[e.keyCode]) {
    //         preventDefault(e);
    //         return false;
    //     }
    // }

    // /* @removeClass ***************************************************************/
    // /******************************************************************************/
    // function removeClass($element, targetClass) {
    //     var rgx = new RegExp("(?:^|\\s)" + targetClass + "(?!\\S)", "g");

    //     $element.className = $element.className.replace(rgx, "");
    // }
    //   }
  }
}
