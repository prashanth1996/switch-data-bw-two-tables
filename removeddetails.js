var Detail1 = Backbone.Model.extend({
	defaults: {
		firstname1: '',
		middlename1: '',
		lastname1: ''
	}
});


var Details1 = Backbone.Collection.extend({
	

});
var details1 = new Details1();





// Backbone View for one detail

var Detail1View = Backbone.View.extend({
	model: new Detail1(),
	tagName: 'tr',
	initialize: function() {
		this.template = _.template($('.details1-list-template').html());
	},
	
	events: {
		'click  .checkbox1': 'cl',
	},
	cl: function() {
		var firstname = this.$('.firstname1').html();
		var middlename = this.$('.middlename1').html();
		var lastname= this.$('.lastname1').html();
		
		//alert(firstname);
		var detail = new Detail({firstname,middlename,lastname});
		details.add(detail);
		this.model.destroy();		
	},
	
	
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});



var Details1View = Backbone.View.extend({
	model: details1,
	el: $('.details1-list'),
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
		_.each(this.model.toArray(), function(detail1) {
			self.$el.append((new Detail1View({model: detail1})).render().$el);
		});
		return this;
	}
});

var details1View = new Details1View();



