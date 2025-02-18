/*  Part 0: Express server code.

*/




/*  Part 1: Constants and variables

    Starting off by initializing constants and variables. 

    Created a CONSTANT for each of the HTML elements that I plan to access in the JavaScript code.

    Some of the elements have a regular and a Drop version - this refers to the different version
    of the navigation bar that shows up depending on the screen size.
    To make the nav bar look different in mobile vs on a wide screen, I created two entirely different 
    elements. For instance, when the screen is wider than 700px, the small nav bar element is set to 
    display: none , and the large-sized element is set to display: block. 
    
*/

const template = document.querySelector("[grid-template]")
const grid = document.querySelector("[grid]")

const dropButton = document.querySelector("[drop-button]")
const dropImage = document.querySelector("[drop-image]")
const dropWindow = document.querySelector("[drop-window]")

const searchInput = document.querySelector("[search-input-lg]")
const searchBox = document.querySelector("[search-box-lg]")
const searchInputDrop = document.querySelector("[search-input-sm]")
const searchBoxDrop = document.querySelector("[search-box-sm]")

const legalButton = document.querySelector("[legal-button-lg]")
const legalButtonDrop = document.querySelector("[legal-button-sm]")
const researchButton = document.querySelector("[research-button-lg]")
const researchButtonDrop = document.querySelector("[research-button-sm]")
const industryButton = document.querySelector("[industry-button-lg]")
const industryButtonDrop = document.querySelector("[industry-button-sm]")
const eventsButton = document.querySelector("[events-button-lg]")
const eventsButtonDrop = document.querySelector("[events-button-sm]")
const usButton = document.querySelector("[us-button-lg]")
const usButtonDrop = document.querySelector("[us-button-sm]")
const internationalButton = document.querySelector("[international-button-lg]")
const internationalButtonDrop = document.querySelector("[international-button-sm]")


/*  Section 1.2

    Next, I'm creating the VARIABLES. This is for values that are going to change during the life cycle of
    the web page (from when the user opens the page to when they refresh it.)

    Each variable here is fairly self explanatory; however:

        articles - Used to hold the array of data (objects named 'article') that will be pulled in from the JSON file.

        isDropWindowOpen - Boolean used to check whether the drop down navigation bar menu is currently open or not.
        
        searchValue - String that holds the text that currently sits in the search bar elements.  Since there are technically two search bars
        (one in the small-sized nav bar and one in the large one), this variable is constantly being updated whenever a new character is entered
        into or removed from one of the search input bars.  The variable is updated to the value that is stored in that search bar, and then the other search bar
        (the one not currently showing on the web page to the user) will be updated to contain the value that is stored in this string.
        This is a roundabout way of making sure each search bar always has the same input value as the other one, so if a user
        switched screen sizes and consequently nav bar sizes, they wouldn't lose the data in their search bar.

        The remaining variables are all Boolean variables, used to denote whether specific navigation bar filters are activated or not. 
        Each specific filter has its own Boolean variable (isLegalFilterActive, isUsFilterActive, etc), and then there is a separate variable for each of the 
        types of filter (isAnyCategoryFilterActive for the 'category' filters, etc.).  This is so that the script can first determine whether any filters are
        activated, then it can check to see which ones are active.
*/

let articles = []

let isDropWindowOpen = false;

let searchValue = "";

let isAnyCategoryFilterActive = false;
let isLegalFilterActive = false;
let isResearchFilterActive = false;
let isIndustryFilterActive = false;
let isEventsFilterActive = false;



/*  Part 2: Using the 'fetch' function to pull the data from the array of objects in the "./articles.json" folder.

    The 'articles' folder contains all of the data that will be populated onto the card elements of the website.
    Each object in the array is a different card for the website's main content grid.
    The purpose here is to allow the data to be manipulated (updated, modified) without touching the code.

    The 'articles' array variable created above (Part 1) is referenced and filled with the values contained in the
    JSON array.  Next, I created a constant representing the each card element from the HTML (named 'card').
    I used a template element representing the grid, and then for this card constant I referenced the first child node
    of that grid and just created a clone of it.
    After this, I use DOM to reference each element within the element accessed by the card constant.  For each of these inner
    elements, I create another constant.
    * For the buttons at the bottom of the card, even though the 2 buttons (actually 1 button and 1 link) on the front page
    are the same as the 2 on the back side of the card, I had to create separate constants here in JS.

    After creating these constants, I take the values located at each attribute in the 'article' objects and store them
    in the corresponding constants created here inside this function.
    * For the category and location tag constants, I also add a class to their class lists that references the value that's stored there.
    This helps with scripting later by giving an easy way for the JS to know how to classify the card component.

    For the flip buttons, since they are simply interacting with CSS rather than changing any HTML, I added an event listener
    which, upon activation of the button, toggles a class that 'flips' the card by transforming it in rotation around the Y-axis.
    * I also added a class that makes the opacity of the image element = 0, because on mobile, after the card flips around, 
    the image would pop back up on the back side of the card in reverse after a short delay. This was an easy way to prevent this from happening. 
    The delay is implemented on this last function to prevent the image from disappearing while the card is rotating.

    Once each of the constants created here for the card's inner elements is given the proper values to hold, I will append the 'card' constant
    to the 'grid' constant created in part 1, which represents the actual grid in HTML (as opposed to the template), which starts as empty.

    ***

    Need to add a section in here to explain why the return part of this is important. Don't exactly remember but it has to do with the 
    map function used at the top, and the end goal of being able to reference the article objects later on in the script

*/

fetch("./articles.json")
    .then(res => res.json())
    .then(data => {
        articles = data.map(article => {

            const card = template.content.cloneNode(true).children[0]
            
            const image = card.querySelector("[card-image]")
            const category = card.querySelector("[category-tag]")
            const title = card.querySelector("[card-title]")
            const source = card.querySelector("[card-source]")
            const date = card.querySelector("[card-date]")
            const summary = card.querySelector("[card-summary]")

            const linkFront = card.querySelector("[read-link-front]")
            const linkBack = card.querySelector("[read-link-back]")
            const buttonFront = card.querySelector("[flip-button-front]")
            const buttonBack= card.querySelector("[flip-button-back]")

            
            const frontCorner = card.querySelector("[front-corner]")
            const backCorner = card.querySelector("[back-corner]")

            image.src = article.image

            category.textContent = article.category
            const categoryClass = article.category.toLowerCase()
            category.classList.add(categoryClass)

            switch (categoryClass) {
                case 'legal':
                    for(let i=0; i < card.querySelectorAll("[suit-icon]").length; i++) {
                        card.querySelectorAll("[suit-icon")[i].src = "./svg/helmet-safety-1.svg"
                    }
                    break
                case 'industry':
                    for(let i=0; i < card.querySelectorAll("[suit-icon]").length; i++){
                        card.querySelectorAll("[suit-icon")[i].src = "./svg/briefcase-1.svg"
                    }
                    break
                case 'research':
                    for(let i=0; i < card.querySelectorAll("[suit-icon]").length; i++){
                        card.querySelectorAll("[suit-icon")[i].src = "./svg/graduation-cap-1.svg"
                    }
                    break
                case 'events':
                    for(let i=0; i < card.querySelectorAll("[suit-icon]").length; i++){
                        card.querySelectorAll("[suit-icon")[i].src = "./svg/hand-shake.svg"
                    }
                    break
                default:
                    for(let i=0; i < card.querySelectorAll("[suit-icon]").length; i++){
                        card.querySelectorAll("[suit-icon")[i].src = "./svg/code-1.svg"
                    }
                    break

            }

            title.textContent = article.title
            source.textContent = article.source
            date.textContent = article.date

            summary.textContent = article.summary

            linkFront.setAttribute("href", article.link)
            linkBack.setAttribute("href", article.link)



            buttonFront.addEventListener("click", () => {
                
                frontCorner.classList.toggle('hide')
                
                card.classList.toggle('is-flipped')

                setTimeout (() => {
                    backCorner.classList.toggle('hide')
                }, 800)

                if(!card.classList.contains('is-image-hidden')) {
                    setTimeout (() => {
                        card.classList.toggle('is-image-hidden')
                    }, 200)
                } else {
                    card.classList.toggle('is-image-hidden')
                }
            })

            buttonBack.addEventListener("click", () => {

                backCorner.classList.toggle('hide')

                card.classList.toggle('is-flipped')

                setTimeout (() => {
                    frontCorner.classList.toggle('hide')
                }, 800)

                if(!card.classList.contains('is-image-hidden')) {
                    setTimeout (() => {
                        card.classList.toggle('is-image-hidden')
                    }, 200)
                } else {
                    card.classList.toggle('is-image-hidden')
                }
            })



            grid.append(card)
            return { 
                image: article.image,
                category: article.category,
                title: article.title,
                source: article.source,
                date: article.date,
                summary: article.summary,
                link: article.link,
                element: card
            }
        })
    })

/*  Part 3: Event listeners

    The event listeners in here can be broken down into sub-sections:
        Clicking the drop down button
        Entering string values into the search bar
        Clicking the filter buttons
        Mousing over or out from the filter buttons
    
    ***
*/

/*  Section 3.1: 'Clicking the drop down button'

    The drop button is the little menu button at the top-right of the small-sized nav bar.
    This button allows you to access or hide the search and filter components of the nav bar,
    which keeps the nav bar small and concise for mobile devices.
    To achieve this, the page loads with the 'bottom' section of the nav bar (what we are calling the 'dropWindow' here in JS)
    hidden. This is done by using the class 'hide' which adds a display: none selector.  
    To access this section, the class 'hide' is removed, and the inherent display resurfaces.
    Inversely, clicking it again will retract the bottom section of the nav by re-adding the hide class.

*/

dropButton.addEventListener("click", function () {
    if (isDropWindowOpen === false) {
        isDropWindowOpen = true
        dropWindow.classList.remove("hide")
        dropImage.src = "./svg/menu-gray.svg"
    } else {
        isDropWindowOpen = false
        dropWindow.classList.add("hide")
        dropImage.src = "./svg/menu-white.svg"
    }
})

/*  Section 3.2: 'Entering string values into the search bar'

    The search input event listeners work by taking the input value out of the search box and storing it at the variable 'searchValue'.

    There are two separate event listeners here: one for the search box on the small screen size and one for the one built into the large-sezed screen.

    The next two lines in each EL are put here to make sure that the value in the other search box is the same as what is
    in the one the user is currently typing into.
    Since the two search boxes are separate HTML elements, they must be kept on the same page incase the user is to
    expand the screen size, so that the user doesn't lose the values that they have entered into the box prior.

    The filtering is actually carried out by the 'refreshGrid' function. We will get into that in part 4, but it is
    valuable to note here that this function is used by all of the event listeners that act to update which cards show
    up on the web page.
*/

searchInput.addEventListener("input", e => {
    searchValue = e.target.value.toLowerCase()
    searchInputDrop.value = searchValue
    searchInput.value - searchValue

    refreshGrid()
})

searchInputDrop.addEventListener("input", e => {

    console.log(e.target.value.toLowerCase())

    searchValue = e.target.value.toLowerCase()
    searchInput.value = searchValue
    searchInputDrop.value = searchValue

    refreshGrid()
})

/*  Section 3.3.1: 'Clicking the filter buttons' (category filter class)

    First of all, I also had to create two different event listeners for each 'button', since each filter actually has two buttons attached to it,
    one in the small screen size version of the nav bar and one in the large-sized one.

    This starts by checking the isThisFilterActive boolean variable (example: isLegalFilterActive) is see if it is currently active or not.
    This creates what is effectively a toggle function for this button, each click is either turning it on if it's currently off, or turning it off
    if it happens to already be on.

    If the isActive variable is false (meaning the button is currently not active), then I first set it to true.
    The following 'activateButton' functions, which we will cover in part 4, basically just change the color of the button.
    It is called twice, once for each of the two button elements in the HTML (small and large), so that they are both activated when
    either is clicked.
    Then, we're going to check to see if the isAnyCategoryFilterActive is active. This boolean variable is used to tell the script 
    (in the refreshGrid function) whether any filters labeled 'category' filters are currently active. 
    If none are, then this boolean is false and all cards under any of the 'categories' are permitted to show up.
    If one or more 'categories' are selected, then the boolean is true and only the selected categories are loaded onto the grid.
    For the purpose of this event listener, if this boolean is false when we are activating a filter, that means that we currently have 0 category
    filters active and we are now going to have 1 active; so now the boolean is set to true.

    Inversely, if the isThisFilterActive boolean is true, this means that the button is active already, so we are turning it off when we click it.
    We basically do the opposite as we did when it was false.
    For the isAnyCategoryFilterActive, we know that the filter that we are currently accessing is now false, so we just check to see
    the status of the other filters.  
    If they are all also false, then we know that there are currently 0 filters active and we can set isAnyCategoryFilterActive to false.
    This will allow all of the categories to populate the grid when the 'refreshGrid function is called.

    Finally, we call the 'refreshGrid' function.


*/

legalButton.addEventListener("click", function () {
    if (isLegalFilterActive === false) {

        isLegalFilterActive = true;
        activateButton(legalButton)
        activateButton(legalButtonDrop)

        if (isAnyCategoryFilterActive === false) {
            isAnyCategoryFilterActive = true;
        }

    } else {
        
        isLegalFilterActive = false;
        deactivateButton(legalButton)
        deactivateButton(legalButtonDrop)

        if (isResearchFilterActive === false && isEventsFilterActive === false && isIndustryFilterActive === false) {
            isAnyCategoryFilterActive = false;
        }

    }

    refreshGrid()
} )

legalButtonDrop.addEventListener("click", function () {
    if (isLegalFilterActive === false) {

        isLegalFilterActive = true;
        activateButton(legalButtonDrop)
        activateButton(legalButton)

        if (isAnyCategoryFilterActive === false) {
            isAnyCategoryFilterActive = true;
        }

    } else {
        
        isLegalFilterActive = false;
        deactivateButton(legalButtonDrop)
        deactivateButton(legalButton)

        if (isResearchFilterActive === false && isEventsFilterActive === false && isIndustryFilterActive === false) {
            isAnyCategoryFilterActive = false;
        }

    }

    refreshGrid()
} )

researchButton.addEventListener("click", function () {
    if (isResearchFilterActive === false) {

        isResearchFilterActive = true;
        activateButton(researchButton)
        activateButton(researchButtonDrop)

        console.log(isResearchFilterActive)

        if (isAnyCategoryFilterActive === false) {
            isAnyCategoryFilterActive = true;
        }

    } else {

        isResearchFilterActive = false;
        deactivateButton(researchButton)
        deactivateButton(researchButtonDrop)

        console.log(isResearchFilterActive)

        if (isLegalFilterActive === false && isEventsFilterActive === false && isIndustryFilterActive === false) {
            isAnyCategoryFilterActive = false;
        }

    }

    refreshGrid()
} )

researchButtonDrop.addEventListener("click", function () {
    if (isResearchFilterActive === false) {

        isResearchFilterActive = true;
        activateButton(researchButtonDrop)
        activateButton(researchButton)

        if (isAnyCategoryFilterActive === false) {
            isAnyCategoryFilterActive = true;
        }

    } else {

        isResearchFilterActive = false;
        deactivateButton(researchButtonDrop)
        deactivateButton(researchButton)

        if (isLegalFilterActive === false && isEventsFilterActive === false && isIndustryFilterActive === false) {
            isAnyCategoryFilterActive = false;
        }

    }

    refreshGrid()
} )

industryButton.addEventListener("click", function () {
    if (isIndustryFilterActive === false) {

        isIndustryFilterActive = true;
        activateButton(industryButton)
        activateButton(industryButtonDrop)

        if (isAnyCategoryFilterActive === false) {
            isAnyCategoryFilterActive = true;
        }

    } else {

        isIndustryFilterActive = false;
        deactivateButton(industryButton)
        deactivateButton(industryButtonDrop)

        if (isResearchFilterActive === false && isEventsFilterActive === false && isIndustryFilterActive === false) {
            isAnyCategoryFilterActive = false;
        }

    }

    refreshGrid()
} )

industryButtonDrop.addEventListener("click", function () {
    if (isIndustryFilterActive === false) {

        isIndustryFilterActive = true;
        activateButton(industryButtonDrop)
        activateButton(industryButton)

        if (isAnyCategoryFilterActive === false) {
            isAnyCategoryFilterActive = true;
        }

    } else {

        isIndustryFilterActive = false;
        deactivateButton(industryButtonDrop)
        deactivateButton(industryButton)

        if (isResearchFilterActive === false && isEventsFilterActive === false && isIndustryFilterActive === false) {
            isAnyCategoryFilterActive = false;
        }

    }

    refreshGrid()
} )

eventsButton.addEventListener("click", function () {
    if (isEventsFilterActive === false) {

        isEventsFilterActive = true;
        activateButton(eventsButton)
        activateButton(eventsButtonDrop)

        if (isAnyCategoryFilterActive === false) {
            isAnyCategoryFilterActive = true;
        }
        
    } else {

        isEventsFilterActive = false;
        deactivateButton(eventsButton)
        deactivateButton(eventsButtonDrop)

        if (isResearchFilterActive === false && isEventsFilterActive === false && isIndustryFilterActive === false) {
            isAnyCategoryFilterActive = false;
        }

    }

    refreshGrid()
} )

eventsButtonDrop.addEventListener("click", function () {
    if (isEventsFilterActive === false) {

        isEventsFilterActive = true;
        activateButton(eventsButtonDrop)
        activateButton(eventsButton)

        if (isAnyCategoryFilterActive === false) {
            isAnyCategoryFilterActive = true;
        }
        
    } else {

        isEventsFilterActive = false;
        deactivateButton(eventsButtonDrop)
        deactivateButton(eventsButton)

        if (isResearchFilterActive === false && isEventsFilterActive === false && isIndustryFilterActive === false) {
            isAnyCategoryFilterActive = false;
        }

    }

    refreshGrid()
} )

/*  Section 3.3.2: 'Clicking the filter buttons' (LOCATION filter class)

    These work almost exactly like the previous section's category filter buttons, with only one key difference.
    Since there are (currently) only two location filters (US or international), I have it set towhere when one is activated, the other
    is toggled off (if it was activated prior).  The purpose of this is because it would be pointless to have both activated simultaneously, 
    which would effectively be the same thing as having neither of them activated.
    To accomplish this, when one is toggled on, it checks to see if the other is currently also toggled on by checking its boolean variable status.
    If it is toggled on, then the script turns it off by setting the value to false.

*/



/*  Section 3.4: 'Mousing over or out from the filter buttons'

    Each button is set up, using these event listeners, to change to one color when the mouse is hovering
    over it, and to change back to the original color when the mouse stops hovering over it.

    I found it easier to use JS event listeners rather than the traditional built-in CSS :hover selector since
    the background color is set to change when the button is toggled on.
    This way, the event listener can check to see if it's toggled on or not, and then change the background color
    appropriately depending on the filter status.

    I separated the actions into separate 'mouseOver' and 'mouseOut' functions to eliminate redundancy.

*/

legalButton.addEventListener("mouseover", () => {
    mouseOver(legalButton, isLegalFilterActive)
})


legalButton.addEventListener("mouseout", () => {
    mouseOut(legalButton, isLegalFilterActive)
})

legalButtonDrop.addEventListener("mouseover", () => {
    mouseOver(legalButtonDrop, isLegalFilterActive)
})

legalButtonDrop.addEventListener("mouseout", () => {
    mouseOut(legalButtonDrop, isLegalFilterActive)
})

researchButton.addEventListener("mouseover", () => {
    mouseOver(researchButton, isResearchFilterActive)
})

researchButton.addEventListener("mouseout", () => {
    mouseOut(researchButton, isResearchFilterActive)
})

researchButtonDrop.addEventListener("mouseover", () => {
    mouseOver(researchButtonDrop, isResearchFilterActive)
})

researchButtonDrop.addEventListener("mouseout", () => {
    mouseOut(researchButtonDrop, isResearchFilterActive)
})

industryButton.addEventListener("mouseover", () => {
    mouseOver(industryButton, isIndustryFilterActive)
})

industryButton.addEventListener("mouseout", () => {
    mouseOut(industryButton, isIndustryFilterActive)
})

industryButtonDrop.addEventListener("mouseover", () => {
    mouseOver(industryButtonDrop, isIndustryFilterActive)
})

industryButtonDrop.addEventListener("mouseout", () => {
    mouseOut(industryButtonDrop, isIndustryFilterActive)
})

eventsButton.addEventListener("mouseover", () => {
    mouseOver(eventsButton, isEventsFilterActive)
})

eventsButton.addEventListener("mouseout", () => {
    mouseOut(eventsButton, isEventsFilterActive)
})

eventsButtonDrop.addEventListener("mouseover", () => {
    mouseOver(eventsButtonDrop, isEventsFilterActive)
})

eventsButtonDrop.addEventListener("mouseout", () => {
    mouseOut(eventsButtonDrop, isEventsFilterActive)
})

usButton.addEventListener("mouseover", () => {
    mouseOver(usButton, isUsFilterActive)
})

usButton.addEventListener("mouseout", () => {
    mouseOut(usButton, isUsFilterActive)
})

usButtonDrop.addEventListener("mouseover", () => {
    mouseOver(usButtonDrop, isUsFilterActive)
})

usButtonDrop.addEventListener("mouseout", () => {
    mouseOut(usButtonDrop, isUsFilterActive)
})

internationalButton.addEventListener("mouseover", () => {
    mouseOver(internationalButton, isInternationalFilterActive)
})

internationalButton.addEventListener("mouseout", () => {
    mouseOut(internationalButton, isInternationalFilterActive)
})

internationalButtonDrop.addEventListener("mouseover", () => {
    mouseOver(internationalButtonDrop, isInternationalFilterActive)
})

internationalButtonDrop.addEventListener("mouseout", () => {
    mouseOut(internationalButtonDrop, isInternationalFilterActive)
})

/*  Part 4: Functions
*/

/*  'activateButton' and 'deactivateButton' just change the background color of the button in question.
*/

function activateButton(button) {
    button.style.backgroundColor = "#000000"
}

function deactivateButton(button) {
    button.style.backgroundColor = "#161616"
}


/*  'mouseOver' and 'mouseOut' are going to basically act as hover functions for all of the filter buttons. 
    Because each button has an active and an inactive state, they need alternating hover colors to correspond with each.
*/

function mouseOver(button, isFilterActive) {
    if (isFilterActive === true) {
        button.style.backgroundColor = "#161616"
    } else {
        button.style.backgroundColor = "#000000"
    }
}

function mouseOut(button, isFilterActive) {
    if (isFilterActive === true) {
        button.style.backgroundColor = "#000000"
    } else {
        button.style.backgroundColor = "#161616"
    }
}

/*  'refreshGrid' is the big boy of the whole script.  This is designed to carry the weight of all of the nav bar finctionality 
    (filters and search bar).
    This function has a nested series of filter criteria that it checks to make sure that all of the criteria effectively
    sort only the cards that the user is looking for and that they can sort this data simultaneously (i.e. input text in the search bar, two category
    filters selected, and a location filter selected all at once should show only cards from the correct location, of either of the two selected 
    categories, with text in either the title or summary matching the search input text).

    To do this, it parses the articles array and starts each object by setting the 'isVisible' boolean to false. If the variable is
    false at the end, then the card will not make the cut.  If it's true, then it will populate.
    First the function checks the title and summary to see if it matches the search input text. If the text is blank or "", then
    it will match everything.
    If that passes, then the next conditional is checking if there are any category filters active. If so, it finds out which ones are active and
    compares that to the category of each card to see which ones should populate.
    When a match is found, then 'isVisible' is set to true.
    Afterwards, it's going to do the same by checking one or both of the location filters and comparing them to the location tag associated with
    the card element. In this case, we are going to go the opposite way and look for mismatched comparisons (where the US filter is true and the
    card has an international tag, for example).  If one of these mis-matches registers as true, then the isVisible boolean is set back to false.
    The location filter check is done regardless of whether the category filters are active or not.

    If when we get to the end of the current iteration of the loop and the isVisible boolean is still set to false, then we add the 'hide' class
    to the current card element and move onto the next. 
    The way grid works, if you hide one card, then the next one will just move up into its place.
*/


function refreshGrid() {

    articles.forEach(article => {
        let isVisible = false;

        if (article.title.toLowerCase().includes(searchValue) || article.summary.toLowerCase().includes(searchValue)) {
            if (isAnyCategoryFilterActive === true) {
                if (isLegalFilterActive === true && article.category.toLowerCase().includes("legal")) {
                    isVisible = true
                } else if (isResearchFilterActive === true && article.category.toLowerCase().includes("research")) {
                    isVisible = true
                } else if (isIndustryFilterActive === true && article.category.toLowerCase().includes("industry")) {
                    isVisible = true
                } else if (isEventsFilterActive === true && article.category.toLowerCase().includes("events")) {
                    isVisible = true
                }
            } else {
                isVisible = true;
            }
        }

        article.element.classList.toggle("hide", !isVisible)
    })
}