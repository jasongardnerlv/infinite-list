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
        scrollTo: function(){
            callback(scrollElement.scrollTop);
        },
        detach: function(){
            scrollElement.removeEventListener('scroll', boundHandler);
        }
    }
}

export default NativeScroller;
