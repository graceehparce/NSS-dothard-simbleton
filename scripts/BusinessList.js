
import { getBusinesses } from "./database.js"

const businesses = getBusinesses()

export const businessList = () => {
    let businessHTML = "<h1>Active Businesses</h1>"

    businesses.forEach(
        (business) => {
            businessHTML += `
                <section class="info">
                    <h3 class="supply__name">${business.companyName}</h3>
                    <div class="supply__address">
                         ${business.addressFullStreet}
                    </div>
                    <div class="supply__address">
                        ${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}
                    </div>
                </section>
            `
        }
    )

    return businessHTML
}

document
    .querySelector("#content")
    .addEventListener(
        "keypress",
        (keyPressEvent) => {
            const companySearchResultArticle = document.querySelector(".foundBusinesses")

            if (keyPressEvent.charCode === 13) {


                const foundBusinesses = businesses.find(
                    (business) => {
                        if (business.companyName.includes(keyPressEvent.target.value)) {
                            return true
                        }
                    }
                )

                companySearchResultArticle.innerHTML = `<h2>${foundBusinesses.companyName}</h2>
                                                        <div>${foundBusinesses.addressFullStreet}</div>
                                                        <div>${foundBusinesses.addressCity}, ${foundBusinesses.addressStateCode} ${foundBusinesses.addressZipCode}</div> `

            }
        }
    )


