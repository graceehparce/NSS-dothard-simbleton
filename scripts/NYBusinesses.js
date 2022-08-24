import { getBusinesses } from "./database.js";

let businessArray = getBusinesses()

const inNY = (business) => {
    if (business.addressStateCode === "NY") {
        return true
    }
    return false
}

export const NYBusinesses = () => {
    const filteredItems = businessArray.filter(inNY)
    let NYHTML = ""

    filteredItems.forEach(
        (NYObject) => {
            NYHTML += `
            <section class="info">
                <h3 class="supply__name">${NYObject.companyName}</h3>
                <div class="supply__address">
                     ${NYObject.addressFullStreet}
                </div>
                <div class="supply__address">
                    ${NYObject.addressCity}, ${NYObject.addressStateCode} ${NYObject.addressZipCode}
                </div>
            </section>
        `
        }
    )
    return NYHTML

}


