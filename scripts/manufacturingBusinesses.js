import { getBusinesses } from "./database.js"

const businesses = getBusinesses()
const findManBus = (business) => {
    if (business.companyIndustry === "Manufacturing") {
        return true
    }
    return false
}

export const manBusinessList = () => {
    let manBusinessHTML = ""

    const theManBusinessArray = businesses.filter(findManBus)

    theManBusinessArray.forEach(
        (business) => {
            manBusinessHTML += `
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

    return manBusinessHTML
}
