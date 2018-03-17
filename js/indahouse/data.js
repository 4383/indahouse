// localStorage persistence
var defaultData = {
  "project_ground_surface": 2000,
  "project_home_ground_surface": 150,
  "project_home_total_ground_surface": 340,
  "expenses_cover": 850,
}
var dataStorage = {
  fetch: function (search) {
    var data = localStorage.getItem(search)
    if (data == null) {
      console.log(search + " not found")
      data = defaultData[search]
    }
    console.log(search + " " + data)
    return data
  },
  save: function (key, data) {
    localStorage.setItem(key, data)
  }
}
