
var Detail = Backbone.Model.extend({
	defaults: {
		firstname: '',
		middlename: '',
		lastname: ''
	}
});


var Details = Backbone.Collection.extend({
	

});
var details = new Details();





// Backbone View for one detail

var DetailView = Backbone.View.extend({
	model: new Detail(),
	tagName: 'tr',
	initialize: function() {
		this.template = _.template($('.details-list-template').html());
	},
	events: {
		'click  .edit-detail': 'edit',
		'click  .update-detail': 'update',
		'click  .cancel': 'cancel',
		'click  .checkbox': 'clicked',
	},
	
	edit: function() {
		$('.edit-detail').hide();
		
		this.$('.update-detail').show();
		this.$('.cancel').show();

		var firstname = this.$('.firstname').html();
		var middlename = this.$('.middlename').html();
		var lastname = this.$('.lastname').html();

		this.$('.firstname').html('<input type="text" class="form-control firstname-update" value="' + firstname + '">');
		this.$('.middlename').html('<input type="text" class="form-control middlename-update" value="' + middlename + '">');
		this.$('.lastname').html('<input type="text" class="form-control lastname-update" value="' + lastname + '">');
	},
	update: function() {
		this.model.set('firstname', $('.firstname-update').val());
		this.model.set('middlename', $('.middlename-update').val());
		this.model.set('lastname', $('.lastname-update').val());
	},
	clicked: function() {
		var firstname1 = this.$('.firstname').html();
		var middlename1 = this.$('.middlename').html();
		var lastname1 = this.$('.lastname').html();
		//alert(firstname1);
		var detail1 = new Detail1({firstname1,middlename1,lastname1});
		//alert(detail1.toJSON);
		details1.add(detail1);
		this.model.destroy();
	},
	
	cancel: function() {
		detailsView.render();
	},
	
	
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});



var DetailsView = Backbone.View.extend({
	model: details,
	el: $('.details-list'),
	initialize: function() {
		var self = this;
		this.model.on('add', this.render, this);
		this.model.on('change', function() {
			setTimeout(function() {
				self.render();
			}, 30);
		},this);
		this.model.on('remove', this.render, this);
	},
	render: function() {
		var self = this;
		this.$el.html('');
		_.each(this.model.toArray(), function(detail) {
			self.$el.append((new DetailView({model: detail})).render().$el);
		});
		return this;
	}
});

var detailsView = new DetailsView();

$(document).ready(function() {
	$('.add-details').on('click', function() {
		var detail = new Detail({
			firstname: $('.firstname-input').val(),
			middlename: $('.middlename-input').val(),
			lastname: $('.lastname-input').val()
		});
		$('.firstname-input').val(),
		$('.title-input').val('');
		lastname: $('.lastname-input').val()
		
		console.log(detail.toJSON());
		details.add(detail);
	});
	
	
})
