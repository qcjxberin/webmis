var GetInputID = function (options,obj) {
	var defaults = {type:'one'}
	var options = $.extend(defaults, options);
	var id = options.type;
	if(options.type == 'one'){
		id = obj.find('input:checked').val();
	}else{
		obj.find('input:checked').each(function(){
			id += $(this).val()+options.type;
		});
	}
	return id;
}