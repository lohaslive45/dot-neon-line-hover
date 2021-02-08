//! i為嘗試-填滿螢幕的-數字，for內=在section標籤下-產生span"圓點"
for (let i = 0; i < 375; i++) {
    const section = document.querySelector("section")
    const dot = document.createElement("span") 
    section.appendChild(dot)
}

