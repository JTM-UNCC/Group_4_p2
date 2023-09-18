'use strict';

function MakeMultiFilter(originalArray){


    const arrayFilterer = (filterCriteria = undefined, cb = undefined) => {
        if (arrayFilterer.currentArray === undefined){
            arrayFilterer.currentArray = originalArray;
        }

        if (Array.isArray(originalArray)){
            if (typeof filterCriteria === 'function'){
                arrayFilterer.currentArray =
                    arrayFilterer.currentArray.filter(e => filterCriteria(e));
            }
            else return arrayFilterer.currentArray;
        }

        if (typeof cb === 'function'){
            cb.call(originalArray, arrayFilterer.currentArray);
        }

        return arrayFilterer;
    }
    return arrayFilterer;
}

