/*!
 * nopAccelerate Simplex Theme v2.2.0 (http://themes.nopaccelerate.com/themes/nopaccelerate-simplex-theme-3/)
 * Copyright 2019 Xcellence-IT.
 * Licensed under http://www.nopaccelerate.com/terms/
 */

/* Using Simplex js for nopAccelerate Simplex Theme */

$(document).ready(function () {
  //Used js for Header Sticky Menu  
  //http://www.jqueryscript.net/menu/Sticky-Navigation-Bar-with-jQuery-Bootstrap.html
  $(window).bind('scroll',
    function () {
      var navHeight = $("div.header").height();
      var navWidth = $("div.header").width();
      ($(window).scrollTop() > navHeight)
        ? $('.main-menu').addClass('goToTop').width(navWidth)
        : $('.main-menu').removeClass('goToTop');
    });

  //Used js for Responsive Website Checker
  $('#exit').click(function (e) {
    $('.responsive').hide();
    $('.master-wrapper-page').css('margin-top', '0');
  });

  //Used js for Left Sliderbar Collapse(Responsive Devices)
  $('.block .title').click(function () {
    var e = window, a = 'inner';
    if (!('innerWidth' in window)) {
      a = 'client';
      e = document.documentElement || document.body;
    }
    var result = { width: e[a + 'Width'], height: e[a + 'Height'] };
    if (result.width < 991) {
      $(this).siblings('.listbox').slideToggle('slow');
      $(this).toggleClass("arrow-up-down");
    }
  });

  //Used js for flayout cart
  $("#flyout-cart").on('mouseenter',
    function (event) {
      $('#flyout-cart-wrapper').addClass('active');
    });

  $("#flyout-cart").on('mouseleave',
    function (event) {
      $('#flyout-cart-wrapper').removeClass('active');
    });


  //Used js for Product Box and Product Thumbs Slider

  $('#home-category-slider,#sub-category-slider,#manufacturer-slider').owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    navText: ["prev", "next"],
    autoPlay: false,
    lazyLoad: true,
    responsive: {
      0: {
        items: 1
      },
      640: {
        items: 1
      },
      641: {
        items: 3
      },
      768: {
        items: 3
      },
      980: {
        items: 3
      },
      1199: {
        items: 3
      }
    }
  });

  $('#product-slider').owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    navText: ["prev", "next"],
    autoPlay: true,
    lazyLoad: true,
    responsive: {
      0: {
        items: 3
      },
      640: {
        items: 4
      },
      641: {
        items: 5
      },
      768: {
        items: 5
      },
      980: {
        items: 3
      },
      1199: {
        items: 3
      }
    }
  });

  $(
    '#crosssell-products-slider,#home-bestseller-slider,#home-features-slider,#related-products-slider,#also-purchased-products-slider')
    .owlCarousel({
      loop: true,
      dots: false,
      nav: true,
      navText: ["prev", "next"],
      autoPlay: false,
      lazyLoad: true,
      responsive: {
        0: {
          items: 1
        },
        640: {
          items: 1
        },
        641: {
          items: 3
        },
        768: {
          items: 3
        },
        980: {
          items: 3
        },
        1199: {
          items: 4
        }
      }
    });

  $('#home-news-slider').owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    navText: ["prev", "next"],
    autoPlay: false,
    lazyLoad: true,
    responsive: {
      0: {
        items: 1
      },
      640: {
        items: 1
      },
      768: {
        items: 2
      },
      980: {
        items: 2
      },
      1199: {
        items: 2
      }
    }
  });


  /* Used js for BackTop Page Scrolling*/
  (function ($) {
    $.fn.backTop = function (options) {
      var backBtn = this;
      var settings = $.extend({
        'position': 400,
        'speed': 500,
      },
        options);

      //Settings
      var position = settings['position'];
      var speed = settings['speed'];

      backBtn.css({
        'right': 40,
        'bottom': 40,
        'position': 'fixed',
      });

      $(document).scroll(function () {
        var pos = $(window).scrollTop();

        if (pos >= position) {
          //$('#home-mobile').show();
          backBtn.fadeIn(speed);
        } else {
          //$('#home-mobile').hide();
          backBtn.fadeOut(speed);
        }
      });

      backBtn.click(function () {
        $("html, body").animate({
          scrollTop: 0
        },
          {
            duration: 1200
          });
      });
    }
  }(jQuery));

  $('#backTop').backTop({
    'position': 200,
    'speed': 500,
  });

  var recmail = 'contato';
  var docmail = 'kdsoft.com.br';

  $('#mail-send').on('click',
    function () {
      var href = $(this).attr('href');
      $(this).attr('href', href.replace('#', 'mailto:' + recmail + '@' + docmail));
    });

  $('#mail-send-footer').on('click',
    function () {
      var href = $(this).attr('href');
      $(this).attr('href', href.replace('#', 'mailto:' + recmail + '@' + docmail));
    });

  //var observer = new IntersectionObserver(function (entries) {
  //  // no intersection with screen
  //  if (entries[0].intersectionRatio === 0) {
  //    $('.home-mobile').show();
  //  }
  //  // fully intersects with screen
  //  else if (entries[0].intersectionRatio === 1) {
  //    $('.home-mobile').hide();
  //  }
  //},
  //  { threshold: [0, 1] });

  //observer.observe(document.querySelector("#nav-container-top"));

  var maskBehavior = function (val) {
    return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
  },
    options = {
      onKeyPress: function (val, e, field, options) {
        field.mask(maskBehavior.apply({}, arguments), options);
      }
    };

  if ($('.increase-quantity').length > 0 && $('.product-price > span').length > 0 && $('.qty-input').length > 0) {
    var price = $('.product-price > span')[0].attributes[1].nodeValue;
    for (var i = 1; i < 13; i++) {
      $('#parcela-p-' + i + '-sem-juros').text(CalculaParcela(i, $(".qty-input").val() * price));
      if (i === 1) {
        $('#parcela-a-vista').text('R$ ' + CalculaParcela(i, $(".qty-input").val() * price));
      }
    }

    $(".qty-input").on("input",
      function () {
        var price = $('.product-price > span')[0].attributes[1].nodeValue;
        for (var i = 1; i < 13; i++) {
          $('#parcela-p-' + i + '-sem-juros').text(CalculaParcela(i, $(".qty-input").val() * price));
          if (i === 1) {
            $('#parcela-a-vista').text('R$ ' + CalculaParcela(i, $(".qty-input").val() * price));
          }
        }
      });

    $('.increase-quantity').on("click",
      function () {
        var price = $('.product-price > span')[0].attributes[1].nodeValue;
        for (var i = 1; i < 13; i++) {
          $('#parcela-p-' + i + '-sem-juros').text(CalculaParcela(i, $(".qty-input").val() * price));
          if (i === 1) {
            $('#parcela-a-vista').text('R$ ' + CalculaParcela(i, $(".qty-input").val() * price));
          }
        }
      });
    $('.decrease-quantity').on("click",
      function () {
        var price = $('.product-price > span')[0].attributes[1].nodeValue;
        for (var i = 1; i < 13; i++) {
          $('#parcela-p-' + i + '-sem-juros').text(CalculaParcela(i, $(".qty-input").val() * price));
          if (i === 1) {
            $('#parcela-a-vista').text('R$ ' + CalculaParcela(i, $(".qty-input").val() * price));
          }
        }
      });
  }


  //Campos dados do usuario
  if ($('#ZipPostalCode').length > 0) {
    $('#ZipPostalCode').mask('99999-999');
    $('#ZipPostalCode').off("keyup");
    $("#ZipPostalCode").on("keyup",
      function () {
        $(this).cleanVal();
        if ($(this).val().length == 9) {
          var cep = $(this).val().replace(/\D/g, '');
          if (cep != "") {
            var validacep = /^[0-9]{8}$/;
            if (validacep.test(cep)) {
              $.getJSON("https://viacep.com.br/ws/" + cep + "/json/?callback=?",
                function (dados) {
                  if (!("erro" in dados)) {
                    //Atualiza os campos com os valores da consulta.
                    $("#StreetAddress").val(dados.logradouro);
                    $("#County").val(dados.bairro);
                    $("#City").val(dados.localidade);
                    var estadoDbValue = '0';
                    switch (dados.uf) {
                      case 'AC':
                        estadoDbValue = '76';
                        break;
                      case 'AL':
                        estadoDbValue = '77';
                        break;
                      case 'AP':
                        estadoDbValue = '78';
                        break;
                      case 'AM':
                        estadoDbValue = '79';
                        break;
                      case 'BA':
                        estadoDbValue = '80';
                        break;
                      case 'CE':
                        estadoDbValue = '81';
                        break;
                      case 'ES':
                        estadoDbValue = '82';
                        break;
                      case 'GO':
                        estadoDbValue = '83';
                        break;
                      case 'MA':
                        estadoDbValue = '84';
                        break;
                      case 'MT':
                        estadoDbValue = '85';
                        break;
                      case 'MS':
                        estadoDbValue = '86';
                        break;
                      case 'MG':
                        estadoDbValue = '87';
                        break;
                      case 'PA':
                        estadoDbValue = '88';
                        break;
                      case 'PB':
                        estadoDbValue = '89';
                        break;
                      case 'PR':
                        estadoDbValue = '90';
                        break;
                      case 'PE':
                        estadoDbValue = '91';
                        break;
                      case 'PI':
                        estadoDbValue = '92';
                        break;
                      case 'RJ':
                        estadoDbValue = '93';
                        break;
                      case 'RN':
                        estadoDbValue = '94';
                        break;
                      case 'RS':
                        estadoDbValue = '95';
                        break;
                      case 'RO':
                        estadoDbValue = '96';
                        break;
                      case 'RR':
                        estadoDbValue = '97';
                        break;
                      case 'SC':
                        estadoDbValue = '98';
                        break;
                      case 'SP':
                        estadoDbValue = '99';
                        break;
                      case 'SE':
                        estadoDbValue = '100';
                        break;
                      case 'TO':
                        estadoDbValue = '101';
                        break;
                      case 'DF':
                        estadoDbValue = '102';
                        break;
                      default:
                        estadoDbValue = '0';
                        break;
                    }
                    $('#StateProvinceId').val(estadoDbValue);
                    //$("#ibge").val(dados.ibge);
                    $("#customer_attribute_3").focus();

                  } //end if.
                  else {
                    //CEP pesquisado não foi encontrado.
                    //limpa_formulário_cep();
                    alert("CEP não encontrado.");
                  }
                });
            } //end if.
            else {
              //cep é inválido.
              //limpa_formulário_cep();
              alert("Formato de CEP inválido.");
            }
          }
        }
      });
  }

  if ($('#Phone').length > 0) {
    $('#Phone').mask(maskBehavior, options);
  }

  if ($('#Fax').length > 0) {
    $('#Fax').mask(maskBehavior, options);
  }

  if ($('.pais-registro').length > 0) {
    $(".pais-registro").val("168");
    $(".pais-registro").change();
  }

  if ($("input[name='tpCad']").length > 0) {
    $("input[name='tpCad']").off("click");
    $("input[name='tpCad']").on("click",
      function () {
        if ($('#Company').length > 0) {
          $('#Company').val('');
        }
        if ($('#FirstName').length > 0) {
          $('#FirstName').val('');
        }
        if ($('#LastName').length > 0) {
          $('#LastName').val('');
        }
        if ($('#customer_attribute_1').length > 0) {
          $('#customer_attribute_1').val('');
        }
        if ($('#customer_attribute_2').length > 0) {
          $('#customer_attribute_2').val('');
        }
        if ($('#customer_attribute_4').length > 0) {
          $('#customer_attribute_4').val('');
        }
        var radioValue = $("input[name='tpCad']:checked").val();
        if (radioValue && radioValue === 'PF') {
          if ($('#CompanyName').length > 0) {
            $('#CompanyName').hide();
          }
          if ($('#dvFirstName').length > 0) {
            $('#dvFirstName').show();
          }
          if ($('#dvLastName').length > 0) {
            $('#dvLastName').show();
          }
          if ($('.CPF').length > 0) {
            $('.CPF').show();
          }
          if ($('#FirstName').length > 0) {
            $('#FirstName').focus();
          }
        }
        if (radioValue && radioValue === 'PJ') {
          if ($('#CompanyName').length > 0) {
            $('#CompanyName').show();
            $('#Company').focus();
          }
          if ($('#dvFirstName').length > 0) {
            $('#dvFirstName').hide();
          }
          if ($('#dvLastName').length > 0) {
            $('#dvLastName').hide();
          }
          if ($('.CPF').length > 0) {
            $('.CPF').hide();
          }
        }
      });
  }

  if ($('#Company').length > 0) {
    $('#Company').off("keyup");
    $('#Company').on("keyup",
      function () {
        if ($('#Company').val().trim().length > 0) {
          var fullName = $('#Company').val().trim().split(' ');
          if (fullName.length > 0) {
            if ($('#FirstName').length > 0) {
              $('#FirstName').val(fullName[0]);
            }
            if ($('#LastName').length > 0) {
              $('#LastName').val(fullName[fullName.length - 1]);
            }
          }
        }
      });
  }

  if ($('#CompanyName').length > 0) {
    $('#CompanyName').hide();
  }

  if ($("#customer_attribute_1").length > 0) {
    $("#customer_attribute_1").mask("999.999.999-99");
    $("#customer_attribute_1").focus();
    $('#register-button').on('click',
      function () {
        if ($("#customer_attribute_1").val().trim().length > 0) {
          if (validarCPF($("#customer_attribute_1").val())) {
            //do some stuff
            return true;
          } else {
            //just show validation errors, don't post
            alert('Por favor, informe um CPF válido');
            $("#customer_attribute_1").focus();
            return false;
          }
        }
      });
  }

  if ($("#customer_attribute_2").length > 0) {
    $("#customer_attribute_2").mask("99.999.999/9999-99");
    $('#register-button').on('click',
      function () {
        if ($("#customer_attribute_2").val().trim().length > 0) {
          if (validarCNPJ($("#customer_attribute_2").val())) {
            //do some stuff
            return true;
          } else {
            //just show validation errors, don't post
            alert('Por favor, informe um CNPJ válido');
            $("#customer_attribute_2").focus();
            return false;
          }
        }
      });

  }

  //Campos Endereco do usuario
  if ($('#Address_PhoneNumber').length > 0) {
    $('#Address_PhoneNumber').mask(maskBehavior, options);
  }

  if ($('#Address_ZipPostalCode').length > 0) {
    $('#Address_ZipPostalCode').mask('99999-999');
  }

  $('#Address_ZipPostalCode').off("keyup");

  $("#Address_ZipPostalCode").on("keyup",
    function () {
      $(this).cleanVal();
      if ($(this).val().length == 9) {
        var cep = $(this).val().replace(/\D/g, '');
        if (cep != "") {
          var validacep = /^[0-9]{8}$/;
          if (validacep.test(cep)) {
            $.getJSON("https://viacep.com.br/ws/" + cep + "/json/?callback=?",
              function (dados) {
                if (!("erro" in dados)) {
                  //Atualiza os campos com os valores da consulta.
                  $("#Address_Address1").val(dados.logradouro);
                  //$("#bairro").val(dados.bairro);
                  $("#Address_City").val(dados.localidade);
                  //$("#uf").val(dados.uf);
                  //$("#ibge").val(dados.ibge);
                  $("#address_attribute_1").focus();

                } //end if.
                else {
                  //CEP pesquisado não foi encontrado.
                  //limpa_formulário_cep();
                  alert("CEP não encontrado.");
                }
              });
          } //end if.
          else {
            //cep é inválido.
            //limpa_formulário_cep();
            alert("Formato de CEP inválido.");
          }
        }
      }
    });
  if ($(".qtd-carrinho").length > 0 && $("#qtd-carrinho").length > 0) {
    $(".qtd-carrinho").text($("#qtd-carrinho").val());
  }


});

function CalculaParcela(vezes, valor) {
  var valorParcela = (roundToTwo(valor / vezes).toFixed(2));
  valorParcela = valorParcela.toString();
  valorParcela = valorParcela.replace(".", ",");
  valorParcela = valorParcela.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return valorParcela;
}

function roundToTwo(num) {
  return +(Math.round(num + "e+2") + "e-2");
}

function validarCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g, '');
  if (cpf == '') return false;
  // Elimina CPFs invalidos conhecidos	
  if (cpf.length != 11 ||
    cpf == "00000000000" ||
    cpf == "11111111111" ||
    cpf == "22222222222" ||
    cpf == "33333333333" ||
    cpf == "44444444444" ||
    cpf == "55555555555" ||
    cpf == "66666666666" ||
    cpf == "77777777777" ||
    cpf == "88888888888" ||
    cpf == "99999999999")
    return false;
  // Valida 1o digito	
  add = 0;
  for (i = 0; i < 9; i++)
    add += parseInt(cpf.charAt(i)) * (10 - i);
  rev = 11 - (add % 11);
  if (rev == 10 || rev == 11)
    rev = 0;
  if (rev != parseInt(cpf.charAt(9)))
    return false;
  // Valida 2o digito	
  add = 0;
  for (i = 0; i < 10; i++)
    add += parseInt(cpf.charAt(i)) * (11 - i);
  rev = 11 - (add % 11);
  if (rev == 10 || rev == 11)
    rev = 0;
  if (rev != parseInt(cpf.charAt(10)))
    return false;
  return true;
}

function validarCNPJ(cnpj) {

  cnpj = cnpj.replace(/[^\d]+/g, '');

  if (cnpj == '') return false;

  if (cnpj.length != 14)
    return false;

  // Elimina CNPJs invalidos conhecidos
  if (cnpj == "00000000000000" ||
    cnpj == "11111111111111" ||
    cnpj == "22222222222222" ||
    cnpj == "33333333333333" ||
    cnpj == "44444444444444" ||
    cnpj == "55555555555555" ||
    cnpj == "66666666666666" ||
    cnpj == "77777777777777" ||
    cnpj == "88888888888888" ||
    cnpj == "99999999999999")
    return false;

  // Valida DVs
  tamanho = cnpj.length - 2
  numeros = cnpj.substring(0, tamanho);
  digitos = cnpj.substring(tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2)
      pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digitos.charAt(0))
    return false;

  tamanho = tamanho + 1;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2)
      pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digitos.charAt(1))
    return false;

  return true;

}



