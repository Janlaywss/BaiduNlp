(function(window){var svgSprite='<svg><symbol id="icon-baidu1" viewBox="0 0 1024 1024"><path d="M603.131557 677.800163l-41.990347 0s-5.385661-3.331885-5.38566-12.722765l0-88.091315-47.356565 0.604774 0 98.002035s4.563946 25.894763 38.895869 25.894763l79.526241 0L626.821095 583.066569 603.130533 583.066569l0 94.733594zM461.021955 583.066569l-44.414559 0s-40.995693-1.62194-55.359842 44.867883c-4.975315 31.022551 4.457522 42.857087 6.100952 46.771234 1.665942 3.872191 14.904455 26.782993 48.155766 26.782993l69.205175 0L484.709447 523.293207l-23.688515-0.520863 0 60.294225zm0 94.733594l-35.023678 0s-21.570271-0.606821-28.211528-25.442462c-3.331885-11.096732 0.520863-21.699208 2.25025-26.693965 1.62194-4.977361 8.847505-18.909675 23.774473-18.909675l37.210483 0 0 71.046102zM511.51393 66.691935c-245.932202 0-445.285552 199.375863-445.285553 445.308065S265.582751 957.308065 511.51393 957.308065s445.285552-199.375863 445.285552-445.308065S757.446132 66.691935 511.51393 66.691935zm27.151383 236.326427c3.546779-32.385595 42.271756-82.078367 73.316819-74.982762 30.934546 7.05365 59.167564 48.113811 53.435003 83.420944-5.582135 35.369555-33.683147 82.034365-77.406974 76.323293-43.656289-5.582135-53.543474-45.127803-49.344848-84.761475zm-91.575672-89.12997c32.711006 0 59.167564 37.663808 59.167565 84.154655 0 46.533826-26.457582 84.198657-59.167565 84.198657-32.667004 0-59.167564-37.663808-59.167564-84.198657-0.001023-46.489824 26.500561-84.154655 59.167564-84.154655zM262.553765 413.284721s6.989181-69.292156 54.928006-73.576739c38.096666-3.26537 66.135256 38.422078 69.054749 62.263066 1.796926 15.467273 9.842159 86.252433-49.389873 98.994641-59.103096 12.700253-81.080643-55.683207-74.592882-87.680968zm450.888153 298.394041c-32.407084 76.365248-150.830217 36.68962-150.830217 36.68962s-43.676755-14.018272-94.342691-2.791579c-50.688449 11.338233-94.38874 7.031137-94.388741 7.031137s-59.277058 1.428535-76.172867-73.467245c-16.874319-74.982762 59.167564-116.042923 64.859194-123.030058 5.602601-7.095605 45.082778-33.943067 70.39528-76.345806 25.440415-42.444694 101.504812-76.387761 155.048285 7.009648 39.483246 56.593949 107.130949 108.947318 107.130949 108.947318s50.665936 39.612183 18.300808 115.956965zm-9.886161-173.97945c-64.878636 1.473561-67.626213-43.829228-67.626213-76.279291 0-34.008558 6.987135-82.10088 59.21259-82.100879 52.136428 0 66.177212 50.947346 66.177211 67.865667 0 17.026792 7.117095 89.088014-57.763588 90.514503z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)