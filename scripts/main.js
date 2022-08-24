import { businessList } from "./BusinessList.js"
import { manBusinessList } from "./manufacturingBusinesses.js"
import { NYBusinesses } from "./NYBusinesses.js"
import { AgentList } from "./agentList.js"

const contentTarget = document.querySelector("#content")

const renderHTML = () => {
    contentTarget.innerHTML = `
  <input type="text" placeholder="Enter business name..." id="companySearch" />

  <article class="foundBusinesses"></article>

  <article class="businesses">
      <h2>All Businesses</h2>
      ${businessList()}
  </article>

  <article class="businesses--manufacturing">
      <h2>Manufacturing Businesses</h2>
       ${manBusinessList()}
  </article>

  <article class="businesses--newYork">
      <h2>New York Businesses</h2>
      ${NYBusinesses()}
  </article>

  <article class="agents">
      <h2>Purchasing Agents</h2>
      ${AgentList()}
  </article>
  
  `
}

renderHTML()