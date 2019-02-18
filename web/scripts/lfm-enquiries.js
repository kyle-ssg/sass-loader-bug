const {typeOfEnquiries} = require('../cms');

jQuery(function ($) {
    const $typeOfEnquiry = $('#js-type-of-enquiry');
    const $typeOfEnquiryValue = $('#js-enquiry-type-value');
    for (let i = 0; i < typeOfEnquiries.length; i++) {
        $typeOfEnquiry.append(`
            <option value="${typeOfEnquiries[i]}">${typeOfEnquiries[i]}</option>
        `);
    }
    $typeOfEnquiry.change((e)=>{
        $typeOfEnquiryValue.attr("value",`${e.target.value}`)
    })
});