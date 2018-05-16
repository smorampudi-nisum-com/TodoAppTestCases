describe("App.Models.Note", function () {
    it("has default values", function () {
      // Create empty note model.
      var model = new App.Models.Note();
  
      expect(model).to.be.ok;
      expect(model.get("title")).to.equal("");
      expect(model.get("completed")).to.equal("");
    });
  
    it("sets passed attributes", function () {
      var model = new App.Models.Note({
        title: "Grocery List",
        completed: "completed"
      });
  
      expect(model.get("title")).to.equal("Grocery List");
      expect(model.get("completed")).to.equal("completed");
    });
  });
  