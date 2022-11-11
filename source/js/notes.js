var app = new Vue({
    el: "#todolist",
    data: {
        list: [],
        inputValue: "",
    },
    methods: {
        add: function () {
            this.list.push({
                title: this.inputValue,
                checked: false
            });
            this.inputValue = "";
            window.localStorage.setItem('storeData',this.list.value)
        },
        remove: function (index) {
            // console.log('删除');
            this.list.splice(index, 1);
        }
    }
})



