import StyleHelpers from './StyleHelpers';

var NativeScroller = function (scrollElement, callback) {

    var boundHandler = function(){
        callback(scrollElement.scrollTop);
    };

    var ensureScrollTo = function(y, prev){
        scrollElement.scrollTop = y;
        if (scrollElement.scrollTop === prev) setTimeout(() => ensureScrollTo(y, prev), 50);
    };

    scrollElement.addEventListener('scroll', boundHandler);

    return {
        setDimensions: function(min, max){
            StyleHelpers.applyElementStyle(scrollElement, {
                height: (max - min) + 'px'
            });
        },
        scrollTo: function(y, force){
            if (scrollElement.scrollTop === y) return;
            if (force || scrollElement.scrollTop > y || y > (scrollElement.scrollTop + scrollElement.offsetHeight)) ensureScrollTo(y, scrollElement.scrollTop);
        },
        detach: function(){
            scrollElement.removeEventListener('scroll', boundHandler);
        }
    }
}

export default NativeScroller;
