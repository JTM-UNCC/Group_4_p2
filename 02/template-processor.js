'use strict';
class TemplateProcessor {
    constructor(template) {
        this.template = template;
    }

    /*fillIn(dictionary){
        var replace = {
            'x1': "month",
            'x2': "day",
            'x3': "year"
        };
        template = template.replace(/month/, 'x1');
        template = template.replace(/day/, 'x2');
        template = template.replace(/year/, 'x3');
        template = template.replace(/[{}]/g,"");
        template =template.replace(/month|day|year/g, matched => dictionary[matched]);
        template =template.replace(/x1|x2|x3/g, matched => replace[matched]);
        template = template.replace("undefined","")
        return template;
    }  */
    fillIn(dictionary) {
        let returnString = this.template;
        for (const property in dictionary) {
            if (Object.prototype.hasOwnProperty.call(dictionary, property)) {
                returnString = returnString.replaceAll("{{" + property + "}}", dictionary[property]);
            }
        }
        const regex = /{{.*}}/g;
        returnString = returnString.replaceAll(regex, "");
        return returnString;
    }
}