$(function(){
    //GET request
    $('#createInput').on('click', function(){
        $.ajax({

            url: '/products',
            contentType: 'application/json',
            success: function(res) {
                
                var tobodyElement = $('tbody');

                tobodyElement.html('');

                res.products.forEach(function(product){
                    
                    tobodyElement.append('\
                        <tr>\
                             <td class="id">' + product.id + '</td>'+ 
                             '<td class="name">' + product.name + '</td> \
                        </tr>');
                })
            }
        })
    })
});