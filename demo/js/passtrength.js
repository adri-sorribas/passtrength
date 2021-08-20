/*!
 * passtrength.js
 * Original author: @adrisorribas
 * Modified on 08/12/2021 - Al Serize
 * Further changes, comments: @adrisorribas
 * Licensed under the MIT license
 */
;
(function($, window, document, undefined) {

  var pluginName = "passtrength",
      defaults = {
        minChars: 8,
        passwordToggle: true,
        tooltip: true,
        textWeak: 'Weak',
        textMedium: 'Medium',
        textStrong: 'Strong',
        textVeryStrong: 'Very Strong',
        eyeImg : '/ntwtips/common/img/eye.svg',
        formSubmitBtnSelector: '',
        preventFormSubmitPercent: 0
      };

  function Plugin(element, options){ 
    this.element = element;
    this.$elem = $(this.element);
    this.options = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = pluginName;
    _this      = this;
    this.init();
  }

  Plugin.prototype = {    
    init: function(){
      var UUID = this.uuid();
      $(this.element).addClass(  );

      var _this    = this,
          meter    = jQuery('<div/>', {class: 'passtrengthMeter psm_'+UUID}),
          tooltip = jQuery('<div/>', {class: 'tooltip', text: 'Min ' + this.options.minChars + ' chars'})

      meter.insertAfter(this.element);
      $(this.element).appendTo(meter);

      if(this.options.tooltip){
        tooltip.appendTo(meter);
        var tooltipWidth = tooltip.outerWidth() / 2;
        tooltip.css('margin-left', -tooltipWidth)
      }

      this.$elem.bind('keyup keydown', function(event) {
          value = $(this).val();
          _this.check(value);
      });

      if(this.options.passwordToggle){
        _this.togglePassword();
      }

    },

    uuid: function() {
      return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
      );
    }, 
    check: function(value){
      var secureTotal  = 0,
          chars        = 0,
          capitals     = 0,
          lowers       = 0,
          numbers      = 0,
          special      = 0;
          upperCase    = new RegExp('[A-Z]'),
          numbers      = new RegExp('[0-9]'),
          specialchars = new RegExp('([!,%,&,@,#,$,^,*,?,_,~])');
          
        
        chars = value.length >= this.options.minChars?1:-1;        
        capitals = value.match(upperCase)?1:0;        
        numbers = value.match(numbers)?1:0;        
        special = value.match(specialchars)?1:0;
        secureTotal = chars + capitals + numbers + special;
        securePercentage = (secureTotal / 4) * 100;

        this.addStatus(securePercentage);

    },

    addStatus: function(percentage){
      var status = '',
          text = 'Min ' + this.options.minChars + ' chars',
          meter = $(this.element).closest('.passtrengthMeter'),
          tooltip = meter.find('.tooltip');       
      meter.removeClass('weak medium strong very-strong');
      
      if(percentage >= 25){        
        status = 'weak';
        text = this.options.textWeak;
      }
      if(percentage >= 50){        
        status = 'medium';
        text = this.options.textMedium;
      }
      if(percentage >= 75){        
        status = 'strong';
        text = this.options.textStrong;
      }
      if(percentage >= 100){        
        status = 'very-strong';
        text = this.options.textVeryStrong;
      }
      meter.addClass(status);
      if(this.options.tooltip){
        tooltip.text(text);
      }
      //MOD Prevent Submit      
        if(this.options.formSubmitBtnSelector.length){ 
            if(!$(this.options.formSubmitBtnSelector).length && value.length==1){
                console.warn('No Submit Btn to disabled with selector: ' + this.options.formSubmitBtnSelector);
            }            
            $(this.options.formSubmitBtnSelector).attr('disabled', percentage < this.options.preventFormSubmitPercent );            
        }
    },
    togglePassword: function(){
      var buttonShow          = jQuery('<span/>', {class: 'showPassword', html: '<img class="showpass" src="'+ this.options.eyeImg +'" />'}),          
          passElemDivClass    = $(this.element).closest('.passtrengthMeter').attr('class').replace('passtrengthMeter ','.'); 
          buttonShow.on('click',function(){
            var $_eye = $(this);
            $(this).toggleClass('active');
            var input = $(this).siblings('input'),
                fldType = $(input).attr('type') === 'text'?'password':'text';
           
            $(input).attr('type',fldType);
            $(input).focus(); 

            $(input).blur(function(){
              $(this).attr('type','password');
              $_eye.removeClass('active');
            });
            
          }).appendTo( $(passElemDivClass) );  

    }
  }

  $.fn[pluginName] = function(options) {
      return this.each(function() {
          if (!$.data(this, "plugin_" + pluginName)) {
              $.data(this, "plugin_" + pluginName, new Plugin(this, options));
          }
      });
  };

})(jQuery, window, document);
