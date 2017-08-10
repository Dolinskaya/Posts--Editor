
var editor = (function () {
    var _config = {
        name: this.name,
            size: {
            width: this.width || 500,
            height: this.height || 600
            }
    };
    var _data = [];
    var _html = '';
    return {
        init: function(social){
            switch(social) {
                case 'VK':

                    break;
                case 'OK':

                    break;
                case 'IG':
                    _html = '<div class="ig flex">\n' +
                        '    <div class="ig__media">\n' +
                        '        <div class="ig__logo"></div>\n' +
                        '        <img src="http://via.placeholder.com/600x600" alt="">\n' +
                        '    </div>\n' +
                        '    <div class="ig__text">\n' +
                        '        <textarea name="" id="" cols="30" rows="10" placeholder="Введите текст поста"></textarea>\n' +
                        '    </div>';
                    $('#root').append(_html);

                    break;
            };

        },
        unit: function (name) {
            console.log('test');
        },
        getData: function (social) {
            switch(social) {
                case 'VK':
                    _config.size.width = 800;
                    _config.size.height = 700;
                    $.ajax({
                        method: 'GET',
                        baseURL: 'http://jsonplaceholder.typicode.com',
                        url: 'http://jsonplaceholder.typicode.com/posts/1'
                    }).then(function (data) {
                        _data.push(data);
                    });
                    break;
                case 'OK':
                    _config.size.width = 700;
                    _config.size.height = 650;
                    $.ajax({
                        method: 'GET',
                        baseURL: 'http://jsonplaceholder.typicode.com',
                        url: 'http://jsonplaceholder.typicode.com/todos/1'
                    }).then(function (data) {
                        _data.push(data);
                    });
                    break;
                case 'IG':
                    $.ajax({
                        method: 'GET',
                        baseURL: 'http://jsonplaceholder.typicode.com',
                        url: 'http://jsonplaceholder.typicode.com/photos/1'
                    }).then(function (data) {
                        _data.push(data);
                    });
                    $('.ig__media').append('<img src="'+_data.+'">')
            };

        },
        getOptions: function () {
            return _config.name = "ВК";
        },
        clearData: function () {
            return _data = [];
        }
    }
})();
