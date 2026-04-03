const grid = document.getElementById('product-grid');

function renderUI(filter = 'all') {
    const items = filter === 'all' ? pcProducts : pcProducts.filter(p => p.category === filter);

    if (items.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--color-muted);">No builds found in this category.</p>`;
        return;
    }

    grid.innerHTML = items.map(pc => {
        const specArray = pc.specs.split(' | ');
        const specHtml = specArray.map(spec => `<li><span class="spec-val">${spec}</span></li>`).join('');

        const upgradeHtml = Object.keys(pc.upgradeGroups).map(group => `
            <div style="font-size: 11px; font-weight: 700; color: var(--color-accent); text-transform: uppercase; margin: 12px 0 6px;">${group}</div>
            ${pc.upgradeGroups[group].map(opt => `
                <label style="display: flex; justify-content: space-between; font-size: 13px; cursor: pointer; margin-bottom: 6px;">
                    <span>
                        <input type="checkbox" class="cb-${pc.id}" data-price="${opt.price}" data-label="${opt.label}" onchange="updateTotal('${pc.id}')" style="margin-right: 6px; accent-color: var(--color-accent);">
                        ${opt.label}
                    </span>
                    <span style="color: var(--color-muted);">+RM${opt.price.toLocaleString()}</span>
                </label>
            `).join('')}
        `).join('');

        const badgeHtml = pc.badge
            ? `<div style="position:absolute;top:14px;right:14px;background:var(--color-accent);color:#fff;font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;padding:4px 10px;border-radius:20px;">${pc.badge}</div>`
            : '';

        return `
        <div class="product-card" style="position:relative;">
            <div class="product-visual" style="background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.75)), url('${pc.image}') center/cover; height:200px;">
                ${badgeHtml}
                <div style="position:absolute;bottom:15px;left:20px;color:white;font-family:var(--font-display);font-size:22px;font-weight:800;letter-spacing:2px;">
                    ${pc.category.toUpperCase()}
                </div>
            </div>
            <div class="product-body">
                <div class="product-tier">${pc.category.toUpperCase()} TIER</div>
                <div class="product-name">${pc.name}</div>
                <ul class="product-specs">${specHtml}</ul>
                <div style="background:var(--color-bg);padding:15px;border-radius:6px;margin-bottom:20px;border:1px solid var(--color-border);">
                    <div style="font-size:10px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:var(--color-muted);border-bottom:1px solid var(--color-border);padding-bottom:5px;">
                        Optional Upgrades
                    </div>
                    ${upgradeHtml}
                </div>
                <div class="product-footer">
                    <div>
                        <div class="product-price"><small>RM</small> <span id="price-${pc.id}">${pc.basePrice.toLocaleString()}</span></div>
                        <div id="breakdown-${pc.id}" style="font-size:11px;color:var(--color-accent);margin-top:2px;min-height:14px;"></div>
                    </div>
                    <button class="btn btn-primary" onclick="order('${pc.id}')" style="padding:10px 18px;font-size:13px;">Order via WhatsApp</button>
                </div>
            </div>
        </div>`;
    }).join('');
}

function updateTotal(id) {
    const pc = pcProducts.find(p => p.id === id);
    let extra = 0;
    document.querySelectorAll(`.cb-${id}:checked`).forEach(cb => extra += parseInt(cb.dataset.price));
    const total = pc.basePrice + extra;
    document.getElementById(`price-${id}`).innerText = total.toLocaleString();
    const breakdown = document.getElementById(`breakdown-${id}`);
    if (extra > 0) {
        breakdown.innerText = `Base RM${pc.basePrice.toLocaleString()} + Upgrades RM${extra.toLocaleString()}`;
    } else {
        breakdown.innerText = '';
    }
}

function filterData(category, btnElement) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btnElement.classList.add('active');
    renderUI(category);
}

function order(id) {
    const pc = pcProducts.find(p => p.id === id);
    const finalPrice = document.getElementById(`price-${id}`).innerText;
    const selectedUpgrades = Array.from(document.querySelectorAll(`.cb-${id}:checked`)).map(cb => cb.dataset.label);

    let message = `*ZUFITECH ORDER CONFIRMATION*\n`;
    message += `---------------------------\n`;
    message += `*Model:* ${pc.name}\n`;
    message += `*Base Specs:* ${pc.specs.replace(/ \| /g, ', ')}\n\n`;

    if (selectedUpgrades.length > 0) {
        message += `*Upgrades Selected:*\n`;
        selectedUpgrades.forEach(item => message += `- ${item}\n`);
        message += `\n`;
    } else {
        message += `*Configuration:* Standard Base Config\n\n`;
    }

    message += `*TOTAL ESTIMATE: RM ${finalPrice}*\n`;
    message += `---------------------------\n`;
    message += `Hi ZufiTech, I would like to finalize this configuration.`;

    window.open(`https://wa.me/60139293619?text=${encodeURIComponent(message)}`, '_blank');
}

renderUI();
