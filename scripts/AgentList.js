import { getBusinesses } from "./database.js"

const businesses = getBusinesses()

export const AgentList = () => {
    let agentHTML = ""
    const justAgents = businesses.map(
        (business) => {
            return { agentFirstName: business.purchasingAgent.nameFirst, agentLastName: business.purchasingAgent.nameLast, phone: business.phoneWork, company: business.companyName }
        }
    )


    justAgents.forEach(
        (business) => {
            agentHTML += `
                <section class="info">
                    <h3 class="supply__name">${business.agentFirstName} ${business.agentLastName}</h3>
                    <div class="supply__company">
                         ${business.company}
                    </div>
                    <div class="supply__phone">
                        ${business.phone}
                    </div>
                </section>
            `
        }
    )
    return agentHTML
}

document
    .querySelector("#content")
    .addEventListener(
        "keypress",
        (keyPressEvent) => {
            const companySearchResultArticle = document.querySelector(".foundBusinesses")

            if (keyPressEvent.charCode === 13) {

                const justAgents = businesses.map(
                    (business) => {
                        return { agentFirstName: business.purchasingAgent.nameFirst, agentLastName: business.purchasingAgent.nameLast, phone: business.phoneWork, company: business.companyName }
                    }
                )

                const foundBusinesses = justAgents.find(
                    (agent) => {
                        if (agent.agentFirstName.includes(keyPressEvent.target.value) || agent.agentLastName.includes(keyPressEvent.target.value)) {
                            return true
                        }
                    }
                )

                companySearchResultArticle.innerHTML = `<h2>${foundBusinesses.agentFirstName} ${foundBusinesses.agentLastName}</h2>
                                                        <div>${foundBusinesses.company}</div>
                                                        <div>${foundBusinesses.phone}</div> `

            }
        }
    )



// How do you incorporate .join into this? 

