import StyleHelpers from './StyleHelpers';

var NativeScroller = function (scrollElement, callback) {

    var boundHandler = function(){
        callback(scrollElement.scrollTop);
    };

    scrollElement.addEventListener('scroll', boundHandler);

    return {
        setDimensions: function(min, max){
            StyleHelpers.applyElementStyle(scrollElement, {
                height: (max - min) + 'px'
            });
        },
        scrollTo: function(y, force){
            if (scrollElement.scrollTop > y || y > (scrollElement.scrollTop + scrollElement.offsetHeight)) scrollElement.scrollTop = y;
            else if (force) scrollElement.scrollTop = y;
        },
        detach: function(){
            scrollElement.removeEventListener('scroll', boundHandler);
        }
    }
}

export default NativeScroller;
