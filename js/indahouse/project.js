var project_config = new Vue({
  el: '#indahouse',
  data: {
    project_ground_surface: dataStorage.fetch(
      "project_ground_surface"
    ),
    project_home_ground_surface: dataStorage.fetch(
      "project_home_ground_surface"
    ),
    project_home_total_ground_surface: dataStorage.fetch(
      "project_home_total_ground_surface"
    ),
    expenses_cover: dataStorage.fetch("expenses_cover"),
    state: "ok"
  },

  watch: {
    project_ground_surface: {
      handler: function (ground_surface) {
        dataStorage.save("project_ground_surface", ground_surface)
      },
      deep: true
    },
    project_home_ground_surface: {
      handler: function (home_ground_surface) {
        dataStorage.save("project_home_ground_surface", home_ground_surface)
      },
      deep: true
    },
    project_home_total_ground_surface: {
      handler: function (home_total_ground_surface) {
        dataStorage.save(
          "project_home_total_ground_surface",
          home_total_ground_surface
        )
      },
      deep: true
    },
    expenses_cover: {
      handler: function (cover) {
        dataStorage.save("expenses_cover", cover)
      },
      deep: true
    }
  },
  computed: {
    total: function () {
      result = this.project_home_total_ground_surface * 40
      if (result > 80000) {
        this.state = "ko"
      }
      else {
        this.state = "ok"
      }
      return result
    },
    status_color: function () {
      if (this.state == "ko") {
        return "bg-orange"
      }
      return "bg-teal"
    },
    debug: function () {
      return this.$data
    }
  }
})
