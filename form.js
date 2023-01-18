function searchCep() {
  const url = `https://viacep.com.br/ws/${$('#cep').val()}/json/`;
  try {
    const data = getRequest(url);

    $("#city").val(data.localidade);
    $("#district").val(data.bairro);
    $("#logradouro").val(data.logradouro);
  } catch {
    console.log("erro");
  }
}

function getFormErrors() {
  const inputs = $(".req");
  let errors = '';

  inputs.map(function() {
    if ($(this).val() == "") {
      errors += "<p>" + $(this).attr('title') + "</p>"
    }
  });

  return errors;
}

function submitForm() {
  const errors = getFormErrors();
  if (!errors) {
    return $('#modal-success').modal();
  }

  // form has errors
  $('#modal-error-content').html(errors);
  $('#modal-error').modal();
}

$(function () {
  $("#cep").mask("99999-999");
  $("#cpf").mask("999.999.999-99");
  $("#houseNumber").mask("99999999");
  $("#telefone").mask("(99) 9 9999-9999");
});
