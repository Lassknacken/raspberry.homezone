function Steckdose(frequency, id, name) {
    var self = this;

    self.id = id;
    self.frequency = frequency;
    self.name = name;

    self.code = frequency + " " + self.id;
    self.codeOn = self.code + " 1";
    self.codeOff = self.code + " 0";
}