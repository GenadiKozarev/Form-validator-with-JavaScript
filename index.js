let form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let field1 = document.getElementById('field1')
    if (field1.value.trim() === null || field1.value.trim() === '') {
        document.getElementById('field1Error').textContent = 'remember to fill this field'
    }
    field1.addEventListener('input', validateField1)
    function validateField1 (e) {
        if (e.target.value.trim() === null || e.target.value.trim() === '') {
            document.getElementById('field1Error').textContent = 'remember to fill this field'
        } else {
            document.getElementById('field1Error').textContent = ''
        }
    }

    let field2 = document.getElementById('field2')
    field2.addEventListener('input', validateField2)
    function validateField2 (e) {
        if (e.target.value.trim().length > 8) {
            document.getElementById('field2Error').textContent = 'you have exceeded the limit of 8 characters'
        } else {
            document.getElementById('field2Error').textContent = ''
        }
    }

    let field3 = document.getElementById('field3')
    field3.addEventListener('input', validateField3)
    if (field3.value === null || field3.value === '') {
        document.getElementById('field3Error').textContent = 'remember to fill this field. enter between 10 and 25 characters'
    }
    function validateField3 (e) {
        if (e.target.value === null || e.target.value === '' || e.target.value.trim().length < 10 || e.target.value.trim().length > 25) {
            document.getElementById('field3Error').textContent = 'remember to fill this field. enter between 10 and 25 characters'
        } else {
            document.getElementById('field3Error').textContent = ''
        }
    }

    let field4 = document.getElementById('field4')
    field4.addEventListener('input', validateField4)
    function validateField4 (e) {
        if (e.target.value === null || e.target.value === '' || e.target.value.trim().length >= 10 && e.target.value.trim().length <= 25) {
            document.getElementById('field4Error').textContent = ''
        } else if (e.target.value.trim().length < 10 || e.target.value.trim().length > 25) {
            document.getElementById('field4Error').textContent = 'enter between 10 and 25 characters'
        }
    }

    let field5 = document.getElementById('field5')
    let lettersOnly = /^[A-Za-z]*$/
    field5.addEventListener('input', validateField5)
    function validateField5 (e) {
        if (!e.target.value.match(lettersOnly)) {
            document.getElementById('field5Error').textContent = 'do not enter special characters, numbers or empty spaces'
        } else {
            document.getElementById('field5Error').textContent = ''
        }
    }

    let yesChecked = document.getElementById('yesChecked')
    let noChecked = document.getElementById('noChecked')
    yesChecked.addEventListener('click', checkYesButton)
        function checkYesButton (e) {
            if (e.target.value.length !== 0) {
                document.getElementById('field6Error').textContent = 'please clarify why you have chosen "yes" in the previous field'
                let field6 = document.getElementById('field6')
                field6.addEventListener('input', validateField6)
                function validateField6 (e) {
                    if (e.target.value.trim() === null || e.target.value.trim() === '') {
                        document.getElementById('field6Error').textContent = 'please clarify why you have chosen "yes" in the previous field'
                    } else {
                        document.getElementById('field6Error').textContent = ''
                    }
                }
            } else if (noChecked.checked) {
                document.getElementById('field6Error').textContent = ''
            } else {
                document.getElementById('field6Error').textContent = ''
            }
        }

        noChecked.addEventListener('click', checkNoButton)
        function checkNoButton (e) {
            if (e.target) {
                document.getElementById('field6Error').textContent = ''
            }
        }

    let field7 = document.getElementById('field7')
    field7.addEventListener('input', validateField7)
    let emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    function validateField7(e) {
        if (e.target.value === '' || e.target.value === null) {
            document.getElementById('field7Error').textContent = ''
        } else if (!e.target.value.match(emailRegEx)) {
            document.getElementById('field7Error').textContent = 'this email seems to be invalid. please try again'
        } else {
            document.getElementById('field7Error').textContent = ''
        }
    }
})

document.querySelector('.success').addEventListener('click', (e) => {
    location.assign("success.html")
})