var promiseVal = new ReactiveVar("")

Template.example4Demo.events({
  'click #triggerPromise': function (event, template) {
    promiseVal.set("...")
    Meteor.promise("serverPromise").then((val) => promiseVal.set(val))
  }
})

Template.example4Demo.helpers({
  promiseVal: () => promiseVal.get()
})
