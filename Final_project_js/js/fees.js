 const FEE_AMOUNT = 500; // Standard fee for calculation
        
        async function loadFees() {
            const filter = document.getElementById('feeFilter').value;
            let students = await api.get(DB_KEYS.STUDENTS);
            
            // Calculate Totals
            const paidCount = students.filter(s => s.fees === 'Paid').length;
            const unpaidCount = students.filter(s => s.fees === 'Unpaid').length;
            
            document.getElementById('total-collected').innerText = `$${(paidCount * FEE_AMOUNT).toLocaleString()}`;
            document.getElementById('total-pending').innerText = `$${(unpaidCount * FEE_AMOUNT).toLocaleString()}`;

            // Filter Table
            if(filter !== 'all') {
                students = students.filter(s => s.fees === filter);
            }

            const tbody = document.getElementById('feesTable');
            tbody.innerHTML = students.map(s => `
                <tr>
                    <td>#${s.id}</td>
                    <td><strong>${s.name}</strong></td>
                    <td>${s.class}</td>
                    <td>$${FEE_AMOUNT}</td>
                    <td>
                        <span class="badge ${s.fees === 'Paid' ? 'active' : 'inactive'}">
                            ${s.fees}
                        </span>
                    </td>
                    <td>${new Date().toLocaleDateString()}</td>
                    <td>
                        ${s.fees === 'Unpaid' 
                            ? `<button class="btn btn-primary" style="font-size:0.8rem" onclick="markPaid(${s.id})">💵 Collect</button>` 
                            : `<button class="btn" style="font-size:0.8rem" onclick="viewInvoice(${s.id})">📄 Invoice</button>`
                        }
                    </td>
                </tr>
            `).join('');
        }

        // ACTIONS
        async function markPaid(id) {
            if(confirm('Confirm payment collection of $500?')) {
                // We update the Student record directly in this simple architecture
                await api.put(DB_KEYS.STUDENTS, id, { fees: 'Paid' });
                UI.showToast('Payment collected successfully', 'success');
                loadFees();
            }
        }

        async function viewInvoice(id) {
            const students = await api.get(DB_KEYS.STUDENTS);
            const s = students.find(x => x.id == id);
            
            document.getElementById('inv-id').innerText = Date.now().toString().slice(-6);
            document.getElementById('inv-name').innerText = s.name;
            document.getElementById('inv-class').innerText = s.class;
            document.getElementById('inv-date').innerText = new Date().toLocaleDateString();
            
            document.getElementById('invoiceModal').classList.remove('hidden');
        }

        // Listener
        document.getElementById('feeFilter').addEventListener('change', loadFees);

        // Init
        loadFees();