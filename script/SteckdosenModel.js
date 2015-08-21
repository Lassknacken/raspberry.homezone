/// <reference path="../typings/knockout/knockout.d.ts"/>
function SteckdosenModel() {
    var self = this;

    self.steckdosen = ko.observableArray([
        new Steckdose("01100", "1", "TV Wohnzimmer"),
        new Steckdose("01100", "2", "XBOX Multimedia"),
        new Steckdose("01100", "3", "TV Schlafzimmer"),

        new Steckdose("01011", "1", "Daniel A"),
        new Steckdose("01011", "2", "Daniel B"),
        new Steckdose("01011", "3", "Daniel C")
    ]);
}

ko.applyBindings(new SteckdosenModel());