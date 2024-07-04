//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// Branching on my-question-6 page
 router.post('/my-question-6-answer', function (request, response) {
   let stay = request.session.data['propertype']
    if (stay == "House"){
    response.redirect("/my-question-6a")
    } else if (stay == "Flat") {
    response.redirect("/my-question-7")
    }else {
   response.redirect("/my-question-6a")
    }
    })


