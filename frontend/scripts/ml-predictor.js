// ml-predictor.js
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the ML predictor page
    const mlPredictorPage = document.getElementById('mlpredictorPage');
    if (!mlPredictorPage) return;
    
    // Add event listener for when this page becomes active
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
            if (page === 'mlpredictor') {
                // Small delay to ensure page transition completes
                setTimeout(() => {
                    if (document.getElementById('mlpredictorPage').classList.contains('active')) {
                        loadMLDashboard();
                    }
                }, 100);
            }
        });
    });
    
    // Load dashboard if page is already active
    if (mlPredictorPage.classList.contains('active')) {
        loadMLDashboard();
    }
});

function loadMLDashboard() {
    const container = document.getElementById('mlDashboardContainer');
    if (!container) return;
    
    // Check if dashboard is already loaded
    if (container.querySelector('.ml-dashboard')) return;
    
    // Clear container and show loading
    container.innerHTML = `
        <div class="loading-container" style="margin: 50px 0;">
            <div class="loading"></div>
            <p>Loading Smart Premium Predictor...</p>
        </div>
    `;
    
    // Load dashboard after a short delay
    setTimeout(() => {
        container.innerHTML = generateMLDashboardHTML();
        initializeMLDashboard();
    }, 500);
}

function generateMLDashboardHTML() {
    return `
    <div class="ml-dashboard">
        <!-- Floating Particles -->
        <div class="particles" id="particles"></div>
        
        <div class="ml-container">
            <!-- Header -->
            <div class="ml-header">
                <div class="ml-header-content">
                    <h1><i class="fas fa-robot"></i> Smart Insurance Premium Predictor</h1>
                    <p>Advanced machine learning platform for accurate premium estimation with real-time analytics and actionable insights</p>
                    <div class="ml-header-badge">
                        <div class="badge-item">
                            <i class="fas fa-bolt"></i> Real-time Updates
                        </div>
                        <div class="badge-item">
                            <i class="fas fa-chart-line"></i> Advanced Analytics
                        </div>
                        <div class="badge-item">
                            <i class="fas fa-shield-alt"></i> Enterprise Security
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Main Content -->
            <div class="ml-main-content">
                <!-- Input Section -->
                <div class="ml-input-section">
                    <div class="ml-section-title">
                        <i class="fas fa-user-cog"></i>
                        <h2>Insurance Profile Configuration</h2>
                    </div>
                    
                    <!-- Live Preview -->
                    <div class="live-preview" id="livePreview">
                        <h3><i class="fas fa-bolt"></i> Live Premium Estimate</h3>
                        <div class="preview-stats">
                            <div class="preview-stat">
                                <div>Estimated Annual Premium</div>
                                <div class="preview-value" id="liveAnnual">₹0</div>
                            </div>
                            <div class="preview-stat">
                                <div>Monthly Equivalent</div>
                                <div class="preview-value" id="liveMonthly">₹0</div>
                            </div>
                            <div class="preview-stat">
                                <div>Confidence Level</div>
                                <div class="preview-value" id="liveConfidence">0%</div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Input Grid -->
                    <div class="ml-input-grid">
                        <!-- Personal Details -->
                        <div class="ml-input-group">
                            <label><i class="fas fa-user"></i> Age</label>
                            <input type="number" id="mlAge" min="18" max="70" placeholder="Enter your age" class="ml-input-control">
                            <div class="ml-error-message" id="mlAgeError">Please enter a valid age between 18 and 70</div>
                            <div class="ml-input-range">
                                <div class="range-item" data-age="22">
                                    <span class="range-value">18-25</span>
                                    Young
                                </div>
                                <div class="range-item" data-age="38">
                                    <span class="range-value">26-50</span>
                                    Adult
                                </div>
                                <div class="range-item" data-age="58">
                                    <span class="range-value">51-70</span>
                                    Senior
                                </div>
                            </div>
                        </div>
                        
                        <div class="ml-input-group">
                            <label><i class="fas fa-venus-mars"></i> Gender</label>
                            <select id="mlGender" class="ml-input-control">
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                            <div class="ml-error-message" id="mlGenderError">Please select your gender</div>
                        </div>
                        
                        <!-- Insurance Details -->
                        <div class="ml-input-group">
                            <label><i class="fas fa-shield-alt"></i> Coverage Amount</label>
                            <select id="mlCoverage" class="ml-input-control">
                                <option value="">Select Coverage Amount</option>
                                <option value="500000">₹5,00,000 - Basic</option>
                                <option value="1000000">₹10,00,000 - Standard</option>
                                <option value="2000000">₹20,00,000 - Enhanced</option>
                                <option value="5000000">₹50,00,000 - Premium</option>
                                <option value="10000000">₹1,00,00,000 - Comprehensive</option>
                            </select>
                            <div class="ml-error-message" id="mlCoverageError">Please select coverage amount</div>
                        </div>
                        
                        <div class="ml-input-group">
                            <label><i class="fas fa-file-contract"></i> Plan Type</label>
                            <select id="mlPlanType" class="ml-input-control">
                                <option value="">Select Plan Type</option>
                                <option value="Term Life">Term Life (Pure Protection)</option>
                                <option value="Whole Life">Whole Life (With Savings)</option>
                                <option value="Health">Health Insurance</option>
                                <option value="Motor">Motor Insurance</option>
                                <option value="Critical Illness">Critical Illness</option>
                            </select>
                            <div class="ml-error-message" id="mlPlanTypeError">Please select plan type</div>
                        </div>
                        
                        <!-- Risk Factors -->
                        <div class="ml-input-group">
                            <label><i class="fas fa-smoking"></i> Smoking Status</label>
                            <select id="mlSmoker" class="ml-input-control">
                                <option value="">Select Status</option>
                                <option value="No">Non-smoker</option>
                                <option value="Yes">Current Smoker</option>
                                <option value="Former">Former Smoker</option>
                            </select>
                            <div class="ml-error-message" id="mlSmokerError">Please select smoker status</div>
                        </div>
                        
                        <div class="ml-input-group">
                            <label><i class="fas fa-hard-hat"></i> Occupation Risk</label>
                            <select id="mlOccupationRisk" class="ml-input-control">
                                <option value="">Select Risk Level</option>
                                <option value="Low">Low Risk (Office/Professional)</option>
                                <option value="Medium">Medium Risk (Field/Sales/Teaching)</option>
                                <option value="High">High Risk (Construction/Industrial)</option>
                            </select>
                            <div class="ml-error-message" id="mlOccupationRiskError">Please select occupation risk</div>
                        </div>
                        
                        <div class="ml-input-group">
                            <label><i class="fas fa-heartbeat"></i> Medical Conditions</label>
                            <select id="mlMedicalConditions" class="ml-input-control">
                                <option value="">Select Condition</option>
                                <option value="None">None (Excellent Health)</option>
                                <option value="Minor">Minor (Allergies, Asthma)</option>
                                <option value="Moderate">Moderate (Diabetes, Hypertension)</option>
                                <option value="Major">Major (Heart Disease, Cancer)</option>
                                <option value="Chronic">Chronic Conditions</option>
                            </select>
                            <div class="ml-error-message" id="mlMedicalConditionsError">Please select medical condition</div>
                        </div>
                        
                        <div class="ml-input-group">
                            <label><i class="fas fa-calendar-alt"></i> Policy Term (Years)</label>
                            <select id="mlPolicyTerm" class="ml-input-control">
                                <option value="">Select Term</option>
                                <option value="5">5 Years (Short Term)</option>
                                <option value="10">10 Years (Standard)</option>
                                <option value="15">15 Years (Medium Term)</option>
                                <option value="20">20 Years (Long Term)</option>
                                <option value="30">30 Years (Maximum)</option>
                            </select>
                            <div class="ml-error-message" id="mlPolicyTermError">Please select policy term</div>
                        </div>
                    </div>
                    
                    <!-- Predict Button -->
                    <button id="mlPredictBtn" class="ml-predict-btn">
                        <i class="fas fa-rocket"></i> Generate Smart Premium Analysis
                    </button>
                    
                    <!-- Loading Spinner -->
                    <div class="ml-loading-spinner" id="mlLoadingSpinner">
                        <div class="spinner"></div>
                        <p>Analyzing risk profile with ML algorithms...</p>
                    </div>
                </div>
                
                <!-- Results Section -->
                <div class="ml-results-section" id="mlResultsSection">
                    <!-- Premium Summary -->
                    <div class="ml-premium-summary">
                        <div class="summary-card annual">
                            <h3><i class="fas fa-rupee-sign"></i> Annual Premium</h3>
                            <div class="summary-value" id="mlAnnualPremium">₹0</div>
                            <p>Total yearly insurance cost with taxes included</p>
                        </div>
                        
                        <div class="summary-card monthly">
                            <h3><i class="fas fa-calendar-check"></i> Monthly Premium</h3>
                            <div class="summary-value" id="mlMonthlyPremium">₹0</div>
                            <p>Equivalent monthly payment (EMI option available)</p>
                        </div>
                        
                        <div class="summary-card confidence">
                            <h3><i class="fas fa-bullseye"></i> Prediction Confidence</h3>
                            <div class="summary-value" id="mlConfidence">0%</div>
                            <p>Model accuracy score for this estimation</p>
                        </div>
                        
                        <div class="summary-card savings">
                            <h3><i class="fas fa-piggy-bank"></i> Potential Savings</h3>
                            <div class="summary-value" id="mlSavings">₹0</div>
                            <p>Possible savings with optimized plan selection</p>
                        </div>
                    </div>
                    
                    <!-- Charts Section -->
                    <div class="ml-charts-section">
                        <div class="ml-section-title">
                            <i class="fas fa-chart-bar"></i>
                            <h2>Advanced Analytics Dashboard</h2>
                        </div>
                        
                        <div class="ml-charts-grid">
                            <div class="ml-chart-container">
                                <h4><i class="fas fa-chart-bar"></i> Plan Comparison Analysis</h4>
                                <div class="ml-chart-controls">
                                    <button class="ml-chart-btn active" data-chart="plan" data-type="bar">Bar Chart</button>
                                    <button class="ml-chart-btn" data-chart="plan" data-type="line">Line Chart</button>
                                    <button class="ml-chart-btn" data-chart="plan" data-type="radar">Radar Chart</button>
                                </div>
                                <div class="ml-chart-wrapper">
                                    <canvas id="planComparisonChart"></canvas>
                                </div>
                            </div>
                            
                            <div class="ml-chart-container">
                                <h4><i class="fas fa-chart-pie"></i> Premium Cost Breakdown</h4>
                                <div class="ml-chart-controls">
                                    <button class="ml-chart-btn active" data-chart="breakdown" data-type="doughnut">Doughnut</button>
                                    <button class="ml-chart-btn" data-chart="breakdown" data-type="pie">Pie Chart</button>
                                    <button class="ml-chart-btn" data-chart="breakdown" data-type="polarArea">Polar Area</button>
                                </div>
                                <div class="ml-chart-wrapper">
                                    <canvas id="costBreakdownChart"></canvas>
                                </div>
                            </div>
                        </div>
                        
                        <div class="ml-charts-grid">
                            <div class="ml-chart-container">
                                <h4><i class="fas fa-chart-line"></i> Age vs Premium Trend</h4>
                                <div class="ml-chart-controls">
                                    <button class="ml-chart-btn active" data-chart="trend" data-type="line">Line</button>
                                    <button class="ml-chart-btn" data-chart="trend" data-type="bar">Bar</button>
                                </div>
                                <div class="ml-chart-wrapper">
                                    <canvas id="ageTrendChart"></canvas>
                                </div>
                            </div>
                            
                            <div class="ml-chart-container">
                                <h4><i class="fas fa-balance-scale"></i> Risk Assessment</h4>
                                <div class="ml-chart-controls">
                                    <button class="ml-chart-btn active" data-chart="risk" data-type="radar">Radar</button>
                                    <button class="ml-chart-btn" data-chart="risk" data-type="bar">Bar Chart</button>
                                    <button class="ml-chart-btn" data-chart="risk" data-type="polarArea">Polar</button>
                                </div>
                                <div class="ml-chart-wrapper">
                                    <canvas id="riskAssessmentChart"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Insights & Factors -->
                    <div class="ml-insights-section">
                        <div class="ml-insights-card">
                            <div class="ml-section-title" style="border-bottom: none; margin-bottom: 20px;">
                                <i class="fas fa-lightbulb"></i>
                                <h3>Data-Driven Insights</h3>
                            </div>
                            <ul class="ml-insights-list" id="mlInsightsList">
                                <!-- Insights will be inserted here -->
                            </ul>
                        </div>
                        
                        <div class="ml-factors-card">
                            <div class="ml-section-title" style="border-bottom: none; margin-bottom: 20px;">
                                <i class="fas fa-weight-hanging"></i>
                                <h3>Risk Factor Analysis</h3>
                            </div>
                            <div id="mlFactorsList">
                                <!-- Factors will be inserted here -->
                            </div>
                        </div>
                    </div>
                    
                    <!-- Action Buttons -->
                    <div class="ml-action-buttons">
                        <button class="ml-action-btn export" id="mlExportBtn">
                            <i class="fas fa-download"></i> Export Report
                        </button>
                        <button class="ml-action-btn compare" id="mlCompareBtn">
                            <i class="fas fa-exchange-alt"></i> Compare Plans
                        </button>
                        <button class="ml-action-btn new" id="mlResetBtn">
                            <i class="fas fa-redo"></i> New Prediction
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}

// Global chart variables
let mlPlanComparisonChart = null;
let mlCostBreakdownChart = null;
let mlAgeTrendChart = null;
let mlRiskAssessmentChart = null;

// Store current chart types
let mlCurrentChartTypes = {
    plan: 'bar',
    breakdown: 'doughnut',
    trend: 'line',
    risk: 'radar'
};

// Store current chart data
let mlCurrentChartData = {
    plan: {
        labels: ['Term Life', 'Whole Life', 'Health', 'Motor', 'Critical Illness'],
        data: [0, 0, 0, 0, 0]
    },
    breakdown: {
        labels: ['Base Premium', 'Risk Loading', 'Plan Premium', 'Admin Fees', 'GST', 'Profit Margin'],
        data: [0, 0, 0, 0, 0, 0]
    },
    trend: {
        labels: ['25', '30', '35', '40', '45', '50', '55', '60'],
        data: [0, 0, 0, 0, 0, 0, 0, 0]
    },
    risk: {
        labels: ['Age Risk', 'Health Risk', 'Occupation', 'Lifestyle', 'Coverage'],
        data: [0, 0, 0, 0, 0]
    }
};

// Store last prediction result for export
let mlLastPredictionResult = null;
let mlLastFormData = null;

function initializeMLDashboard() {
    // Add ML-specific CSS
    addMLCSS();
    
    // Initialize particles
    createMLParticles();
    
    // Initialize event listeners
    initializeMLEventListeners();
}

function addMLCSS() {
    const styleId = 'ml-dashboard-css';
    if (document.getElementById(styleId)) return;
    
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
    .ml-dashboard {
        font-family: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    
    .ml-container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 20px;
    }
    
    .ml-header {
        text-align: center;
        margin-bottom: 30px;
        padding: 30px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 15px;
        color: white;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    }
    
    .ml-header h1 {
        font-size: 2.5rem;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
    }
    
    .ml-header p {
        font-size: 1.1rem;
        opacity: 0.9;
        max-width: 800px;
        margin: 0 auto 20px;
    }
    
    .ml-header-badge {
        display: flex;
        gap: 15px;
        justify-content: center;
        flex-wrap: wrap;
    }
    
    .badge-item {
        background: rgba(255, 255, 255, 0.2);
        padding: 8px 20px;
        border-radius: 50px;
        font-size: 0.9rem;
        display: flex;
        align-items: center;
        gap: 8px;
    }
    
    .ml-input-section {
        background: white;
        padding: 30px;
        border-radius: 15px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
        margin-bottom: 30px;
    }
    
    .ml-section-title {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 25px;
        padding-bottom: 15px;
        border-bottom: 2px solid rgba(102, 126, 234, 0.1);
    }
    
    .ml-section-title i {
        font-size: 1.8rem;
        color: #667eea;
    }
    
    .ml-section-title h2 {
        font-size: 1.8rem;
        color: #333;
    }
    
    .live-preview {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 20px;
        border-radius: 10px;
        margin: 20px 0;
        display: none;
    }
    
    .live-preview.show {
        display: block;
        animation: fadeIn 0.5s ease;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    .preview-stats {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 15px;
    }
    
    .preview-stat {
        text-align: center;
        padding: 15px;
        background: rgba(255, 255, 255, 0.15);
        border-radius: 8px;
    }
    
    .preview-value {
        font-size: 1.8rem;
        font-weight: bold;
        margin: 10px 0;
    }
    
    .ml-input-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
        margin-bottom: 30px;
    }
    
    .ml-input-group {
        margin-bottom: 15px;
    }
    
    .ml-input-group label {
        display: block;
        margin-bottom: 8px;
        font-weight: 600;
        color: #333;
        display: flex;
        align-items: center;
        gap: 8px;
    }
    
    .ml-input-control {
        width: 100%;
        padding: 12px 15px;
        border: 2px solid #e1e8f0;
        border-radius: 8px;
        font-size: 1rem;
        transition: all 0.3s;
    }
    
    .ml-input-control:focus {
        outline: none;
        border-color: #667eea;
        box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }
    
    .ml-error-message {
        color: #ff6b6b;
        font-size: 0.9rem;
        margin-top: 5px;
        display: none;
    }
    
    .ml-error-message.show {
        display: block;
    }
    
    .ml-input-range {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        gap: 8px;
    }
    
    .range-item {
        text-align: center;
        padding: 8px 12px;
        border-radius: 6px;
        background: #f8fafc;
        transition: all 0.3s;
        flex: 1;
        cursor: pointer;
        border: 2px solid transparent;
    }
    
    .range-item:hover {
        border-color: #667eea;
    }
    
    .range-item.active {
        background: #667eea;
        color: white;
    }
    
    .range-value {
        font-weight: bold;
        display: block;
    }
    
    .ml-predict-btn {
        display: block;
        width: 300px;
        margin: 20px auto;
        padding: 15px 30px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 1.1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s;
    }
    
    .ml-predict-btn:hover:not(:disabled) {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
    }
    
    .ml-predict-btn:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
    
    .ml-loading-spinner {
        display: none;
        text-align: center;
        padding: 30px 0;
    }
    
    .spinner {
        width: 50px;
        height: 50px;
        border: 4px solid #f3f3f3;
        border-top: 4px solid #667eea;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin: 0 auto 15px;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    .ml-results-section {
        display: none;
        animation: slideIn 0.5s ease;
    }
    
    .ml-results-section.show {
        display: block;
    }
    
    @keyframes slideIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    .ml-premium-summary {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        margin-bottom: 30px;
    }
    
    .summary-card {
        background: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        text-align: center;
        position: relative;
        overflow: hidden;
    }
    
    .summary-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
    }
    
    .summary-card.annual::before {
        background: #667eea;
    }
    
    .summary-card.monthly::before {
        background: #4facfe;
    }
    
    .summary-card.confidence::before {
        background: #fa709a;
    }
    
    .summary-card.savings::before {
        background: #ff9a9e;
    }
    
    .summary-card h3 {
        font-size: 1rem;
        margin-bottom: 15px;
        color: #333;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }
    
    .summary-value {
        font-size: 2.2rem;
        font-weight: bold;
        margin: 15px 0;
        color: #667eea;
    }
    
    .summary-card.monthly .summary-value {
        color: #4facfe;
    }
    
    .summary-card.confidence .summary-value {
        color: #fa709a;
    }
    
    .summary-card.savings .summary-value {
        color: #ff9a9e;
    }
    
    .summary-card p {
        color: #666;
        font-size: 0.9rem;
    }
    
    /* Charts Section */
    .ml-charts-section {
        background: white;
        padding: 30px;
        border-radius: 15px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
        margin-bottom: 30px;
    }
    
    .ml-charts-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
        margin-top: 20px;
    }
    
    @media (max-width: 1200px) {
        .ml-charts-grid {
            grid-template-columns: 1fr;
        }
    }
    
    .ml-chart-container {
        margin-bottom: 25px;
    }
    
    .ml-chart-container h4 {
        margin-bottom: 15px;
        font-size: 1.2rem;
        color: #333;
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .ml-chart-wrapper {
        position: relative;
        height: 300px;
        width: 100%;
        background: #f8fafc;
        border-radius: 10px;
        padding: 15px;
        border: 1px solid #e1e8f0;
    }
    
    .ml-chart-controls {
        display: flex;
        gap: 8px;
        margin-top: 10px;
        flex-wrap: wrap;
    }
    
    .ml-chart-btn {
        padding: 6px 15px;
        background: white;
        border: 2px solid #e1e8f0;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.3s;
        font-weight: 600;
        font-size: 0.85rem;
    }
    
    .ml-chart-btn:hover {
        border-color: #667eea;
        color: #667eea;
    }
    
    .ml-chart-btn.active {
        background: #667eea;
        color: white;
        border-color: #667eea;
    }
    
    /* Insights Section */
    .ml-insights-section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
        margin-bottom: 30px;
    }
    
    @media (max-width: 992px) {
        .ml-insights-section {
            grid-template-columns: 1fr;
        }
    }
    
    .ml-insights-card, .ml-factors-card {
        background: white;
        padding: 25px;
        border-radius: 15px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
    }
    
    .ml-insights-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    
    .ml-insights-list li {
        background: rgba(102, 126, 234, 0.05);
        padding: 15px;
        margin: 10px 0;
        border-radius: 8px;
        border-left: 4px solid #667eea;
        display: flex;
        align-items: flex-start;
        gap: 12px;
        transition: transform 0.3s;
    }
    
    .ml-insights-list li:hover {
        transform: translateX(5px);
    }
    
    .ml-insights-list li i {
        color: #667eea;
        margin-top: 3px;
        flex-shrink: 0;
    }
    
    /* Factors Impact */
    .ml-factor-item {
        margin-bottom: 20px;
    }
    
    .ml-factor-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        align-items: center;
    }
    
    .ml-factor-name {
        font-weight: 600;
        color: #333;
        font-size: 1rem;
        display: flex;
        align-items: center;
        gap: 8px;
    }
    
    .ml-factor-impact {
        font-weight: 700;
        color: #667eea;
        font-size: 1.1rem;
    }
    
    .ml-factor-bar {
        height: 12px;
        background: #f1f5f9;
        border-radius: 6px;
        overflow: hidden;
        position: relative;
    }
    
    .ml-factor-fill {
        height: 100%;
        border-radius: 6px;
        background: linear-gradient(90deg, #667eea, #764ba2);
        transition: width 1s ease;
    }
    
    /* Risk Indicators */
    .risk-indicator {
        display: inline-block;
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: 700;
        margin-left: 10px;
    }
    
    .risk-low { 
        background: #d1fae5;
        color: #065f46;
    }
    
    .risk-medium { 
        background: #fef3c7;
        color: #92400e;
    }
    
    .risk-high { 
        background: #fee2e2;
        color: #991b1b;
    }
    
    /* Action Buttons */
    .ml-action-buttons {
        display: flex;
        gap: 15px;
        justify-content: center;
        margin-top: 30px;
        flex-wrap: wrap;
    }
    
    .ml-action-btn {
        padding: 12px 25px;
        border: none;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s;
        display: flex;
        align-items: center;
        gap: 8px;
    }
    
    .ml-action-btn.export {
        background: #fa709a;
        color: white;
    }
    
    .ml-action-btn.compare {
        background: #9d4edd;
        color: white;
    }
    
    .ml-action-btn.new {
        background: #667eea;
        color: white;
    }
    
    .ml-action-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
    
    .particles {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    }
    
    .particle {
        position: absolute;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea 0%, #f093fb 100%);
        opacity: 0.1;
        animation: float 20s infinite linear;
    }
    
    @keyframes float {
        0% { transform: translateY(0) rotate(0deg); }
        100% { transform: translateY(-1000px) rotate(720deg); }
    }
    
    /* Export Modal Styles */
    .ml-export-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    }
    
    .ml-export-modal-content {
        background: white;
        padding: 30px;
        border-radius: 15px;
        max-width: 400px;
        width: 90%;
        text-align: center;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    }
    
    .ml-export-modal h3 {
        margin-bottom: 20px;
        color: #333;
    }
    
    .ml-export-options {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 20px;
    }
    
    .ml-export-option {
        padding: 15px;
        border: 2px solid #e1e8f0;
        border-radius: 10px;
        cursor: pointer;
        transition: all 0.3s;
        display: flex;
        align-items: center;
        gap: 15px;
    }
    
    .ml-export-option:hover {
        border-color: #667eea;
        background: rgba(102, 126, 234, 0.05);
    }
    
    .ml-export-option i {
        font-size: 1.5rem;
        color: #667eea;
    }
    
    .ml-export-option-text {
        text-align: left;
    }
    
    .ml-export-option-text h4 {
        margin: 0 0 5px 0;
        color: #333;
    }
    
    .ml-export-option-text p {
        margin: 0;
        font-size: 0.85rem;
        color: #666;
    }
    
    .ml-export-cancel {
        padding: 10px 30px;
        background: #f1f5f9;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 600;
        color: #666;
        transition: all 0.3s;
    }
    
    .ml-export-cancel:hover {
        background: #e1e8f0;
    }
    
    @media (max-width: 768px) {
        .ml-container {
            padding: 10px;
        }
        
        .ml-header {
            padding: 20px;
        }
        
        .ml-header h1 {
            font-size: 1.8rem;
        }
        
        .preview-stats {
            grid-template-columns: 1fr;
        }
        
        .ml-premium-summary {
            grid-template-columns: 1fr;
        }
        
        .ml-charts-grid {
            gap: 20px;
        }
        
        .ml-chart-wrapper {
            height: 250px;
        }
        
        .ml-action-buttons {
            flex-direction: column;
        }
        
        .ml-action-btn {
            width: 100%;
            justify-content: center;
        }
    }
    `;
    document.head.appendChild(style);
}

function createMLParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    particlesContainer.innerHTML = '';
    
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 60 + 10;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.opacity = Math.random() * 0.1 + 0.05;
        particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particlesContainer.appendChild(particle);
    }
}

function initializeMLEventListeners() {
    // Age range buttons
    document.querySelectorAll('.range-item').forEach(item => {
        item.addEventListener('click', function() {
            const age = this.getAttribute('data-age');
            mlSetAgeRange(parseInt(age));
        });
    });
    
    // Input event listeners
    const inputs = document.querySelectorAll('.ml-input-control');
    inputs.forEach(input => {
        input.addEventListener('change', function() {
            validateMLInput(this.id, this.value !== '');
            updateLivePreview();
        });
        
        input.addEventListener('input', function() {
            if (this.id === 'mlAge') {
                const age = parseInt(this.value) || 0;
                const rangeItems = document.querySelectorAll('.range-item');
                rangeItems.forEach(item => item.classList.remove('active'));
                
                if (age <= 25) {
                    document.querySelector('[data-age="22"]')?.classList.add('active');
                } else if (age <= 50) {
                    document.querySelector('[data-age="38"]')?.classList.add('active');
                } else if (age > 50) {
                    document.querySelector('[data-age="58"]')?.classList.add('active');
                }
            }
            updateLivePreview();
        });
    });
    
    // Chart control buttons
    document.querySelectorAll('.ml-chart-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const chartName = this.getAttribute('data-chart');
            const chartType = this.getAttribute('data-type');
            mlChangeChartType(chartName, chartType, e);
        });
    });
    
    // Predict button
    const predictBtn = document.getElementById('mlPredictBtn');
    if (predictBtn) {
        predictBtn.addEventListener('click', mlGeneratePrediction);
    }
    
    // Action buttons
    document.getElementById('mlExportBtn')?.addEventListener('click', mlExportReport);
    document.getElementById('mlCompareBtn')?.addEventListener('click', mlComparePlans);
    document.getElementById('mlResetBtn')?.addEventListener('click', mlResetForm);
}

function mlSetAgeRange(age) {
    const ageInput = document.getElementById('mlAge');
    if (!ageInput) return;
    
    ageInput.value = age;
    
    // Update range indicators
    document.querySelectorAll('.range-item').forEach(item => {
        item.classList.remove('active');
    });
    
    if (age <= 25) {
        document.querySelector('[data-age="22"]')?.classList.add('active');
    } else if (age <= 50) {
        document.querySelector('[data-age="38"]')?.classList.add('active');
    } else {
        document.querySelector('[data-age="58"]')?.classList.add('active');
    }
    
    validateMLInput('mlAge', true);
    updateLivePreview();
}

function validateMLInput(fieldId, isValid) {
    const errorElement = document.getElementById(fieldId + 'Error');
    if (errorElement) {
        if (!isValid) {
            errorElement.classList.add('show');
        } else {
            errorElement.classList.remove('show');
        }
    }
    return isValid;
}

function updateLivePreview() {
    const formData = collectMLFormData();
    if (Object.values(formData).some(v => v === '')) {
        return;
    }
    
    try {
        const result = mlCalculatePrediction(formData);
        
        const livePreview = document.getElementById('livePreview');
        if (livePreview) {
            livePreview.classList.add('show');
            document.getElementById('liveAnnual').textContent = `₹${result.annualPremium.toLocaleString()}`;
            document.getElementById('liveMonthly').textContent = `₹${result.monthlyPremium.toLocaleString()}`;
            document.getElementById('liveConfidence').textContent = `${result.confidence}%`;
        }
    } catch (error) {
        console.error('Live preview error:', error);
    }
}

function collectMLFormData() {
    return {
        age: document.getElementById('mlAge')?.value || '',
        gender: document.getElementById('mlGender')?.value || '',
        coverage_amount: document.getElementById('mlCoverage')?.value || '',
        plan_type: document.getElementById('mlPlanType')?.value || '',
        smoker: document.getElementById('mlSmoker')?.value || '',
        occupation_risk: document.getElementById('mlOccupationRisk')?.value || '',
        existing_conditions: document.getElementById('mlMedicalConditions')?.value || '',
        policy_term: document.getElementById('mlPolicyTerm')?.value || ''
    };
}

function mlCalculatePrediction(data) {
    // Validate data
    if (!data.age || !data.coverage_amount) {
        throw new Error('Missing required data');
    }
    
    // Base calculation
    const basePremium = parseInt(data.coverage_amount) / 800;
    
    // Factors
    const age = parseInt(data.age);
    const ageFactor = 1 + Math.pow((age - 35) / 30, 2) * 0.5;
    const genderFactor = data.gender === 'Female' ? 0.92 : 
                        data.gender === 'Other' ? 1 : 1.08;
    const smokerFactor = data.smoker === 'Yes' ? 1.6 : 
                         data.smoker === 'Former' ? 1.2 : 1;
    const occupationFactor = data.occupation_risk === 'Low' ? 0.95 : 
                             data.occupation_risk === 'Medium' ? 1.25 : 1.65;
    const medicalFactor = data.existing_conditions === 'None' ? 0.9 : 
                          data.existing_conditions === 'Minor' ? 1.15 : 
                          data.existing_conditions === 'Moderate' ? 1.5 : 
                          data.existing_conditions === 'Major' ? 2.2 : 1.8;
    const planFactor = data.plan_type === 'Term Life' ? 1 : 
                       data.plan_type === 'Whole Life' ? 2.1 : 
                       data.plan_type === 'Health' ? 1.7 : 
                       data.plan_type === 'Motor' ? 1.4 : 1.9;
    const termFactor = 1 + Math.log(parseInt(data.policy_term || 10)) * 0.15;
    
    // Calculate premium
    let annualPremium = basePremium * ageFactor * genderFactor * smokerFactor * 
                        occupationFactor * medicalFactor * planFactor * termFactor;
    
    // Add GST
    annualPremium *= 1.18;
    annualPremium = Math.round(annualPremium / 100) * 100;
    
    // Calculate monthly
    const monthlyPremium = Math.round(annualPremium / 12);
    
    // Confidence
    let confidence = 88;
    if (age < 25 || age > 60) confidence -= 12;
    if (data.smoker === 'Yes') confidence -= 8;
    if (data.existing_conditions !== 'None') confidence -= 10;
    if (data.occupation_risk === 'High') confidence -= 7;
    confidence = Math.max(Math.min(confidence, 97), 72);
    
    // Savings
    const savings = Math.round(annualPremium * 0.18);
    
    return {
        annualPremium,
        monthlyPremium,
        confidence,
        savings,
        factors: {
            ageFactor,
            genderFactor,
            smokerFactor,
            occupationFactor,
            medicalFactor,
            planFactor,
            termFactor
        }
    };
}

// ===== CHART FUNCTIONS =====

function initializePlanComparisonChart() {
    const ctx = document.getElementById('planComparisonChart');
    if (!ctx) return null;
    
    const chartType = mlCurrentChartTypes.plan;
    const data = mlCurrentChartData.plan;
    
    const config = {
        type: chartType,
        data: {
            labels: data.labels,
            datasets: [{
                label: 'Estimated Premium (₹)',
                data: data.data,
                backgroundColor: [
                    'rgba(102, 126, 234, 0.8)',
                    'rgba(240, 147, 251, 0.8)',
                    'rgba(255, 107, 53, 0.8)',
                    'rgba(79, 172, 254, 0.8)',
                    'rgba(250, 112, 154, 0.8)'
                ],
                borderColor: [
                    'rgb(102, 126, 234)',
                    'rgb(240, 147, 251)',
                    'rgb(255, 107, 53)',
                    'rgb(79, 172, 254)',
                    'rgb(250, 112, 154)'
                ],
                borderWidth: 2,
                fill: chartType === 'radar' ? true : false,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `₹${context.raw.toLocaleString()}`;
                        }
                    }
                }
            }
        }
    };
    
    if (chartType === 'bar' || chartType === 'line') {
        config.options.scales = {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value) {
                        return '₹' + value.toLocaleString();
                    }
                }
            }
        };
    }
    
    if (chartType === 'radar') {
        config.options.scales = {
            r: {
                beginAtZero: true,
                ticks: {
                    callback: function(value) {
                        return '₹' + value.toLocaleString();
                    }
                }
            }
        };
    }
    
    return new Chart(ctx.getContext('2d'), config);
}

function initializeCostBreakdownChart() {
    const ctx = document.getElementById('costBreakdownChart');
    if (!ctx) return null;
    
    const chartType = mlCurrentChartTypes.breakdown;
    const data = mlCurrentChartData.breakdown;
    
    const config = {
        type: chartType,
        data: {
            labels: data.labels,
            datasets: [{
                data: data.data,
                backgroundColor: [
                    '#667eea',
                    '#f093fb',
                    '#ff6b35',
                    '#4facfe',
                    '#fa709a',
                    '#fee140'
                ],
                borderWidth: 2,
                borderColor: '#fff',
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.raw}%`;
                        }
                    }
                }
            }
        }
    };
    
    if (chartType === 'doughnut') {
        config.options.cutout = '55%';
    }
    
    return new Chart(ctx.getContext('2d'), config);
}

function initializeAgeTrendChart() {
    const ctx = document.getElementById('ageTrendChart');
    if (!ctx) return null;
    
    const chartType = mlCurrentChartTypes.trend;
    const data = mlCurrentChartData.trend;
    
    const config = {
        type: chartType,
        data: {
            labels: data.labels,
            datasets: [{
                label: 'Premium Trend',
                data: data.data,
                borderColor: '#667eea',
                backgroundColor: chartType === 'bar' ? 'rgba(102, 126, 234, 0.8)' : 'rgba(102, 126, 234, 0.15)',
                borderWidth: 3,
                fill: chartType === 'line',
                tension: 0.4,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '₹' + value.toLocaleString();
                        }
                    }
                }
            }
        }
    };
    
    return new Chart(ctx.getContext('2d'), config);
}

function initializeRiskAssessmentChart() {
    const ctx = document.getElementById('riskAssessmentChart');
    if (!ctx) return null;
    
    const chartType = mlCurrentChartTypes.risk;
    const data = mlCurrentChartData.risk;
    
    const config = {
        type: chartType,
        data: {
            labels: data.labels,
            datasets: [{
                label: 'Risk Level',
                data: data.data,
                backgroundColor: chartType === 'radar' ? 'rgba(102, 126, 234, 0.2)' : [
                    'rgba(102, 126, 234, 0.8)',
                    'rgba(240, 147, 251, 0.8)',
                    'rgba(255, 107, 53, 0.8)',
                    'rgba(79, 172, 254, 0.8)',
                    'rgba(250, 112, 154, 0.8)'
                ],
                borderColor: chartType === 'radar' ? '#667eea' : [
                    'rgb(102, 126, 234)',
                    'rgb(240, 147, 251)',
                    'rgb(255, 107, 53)',
                    'rgb(79, 172, 254)',
                    'rgb(250, 112, 154)'
                ],
                borderWidth: 2,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    };
    
    if (chartType === 'radar') {
        config.options.scales = {
            r: {
                beginAtZero: true,
                max: 100,
            }
        };
    } else if (chartType === 'bar') {
        config.options.scales = {
            y: {
                beginAtZero: true,
                max: 100,
            }
        };
    }
    
    return new Chart(ctx.getContext('2d'), config);
}

function initializeMLCharts() {
    try {
        if (mlPlanComparisonChart) {
            mlPlanComparisonChart.destroy();
            mlPlanComparisonChart = null;
        }
        if (mlCostBreakdownChart) {
            mlCostBreakdownChart.destroy();
            mlCostBreakdownChart = null;
        }
        if (mlAgeTrendChart) {
            mlAgeTrendChart.destroy();
            mlAgeTrendChart = null;
        }
        if (mlRiskAssessmentChart) {
            mlRiskAssessmentChart.destroy();
            mlRiskAssessmentChart = null;
        }
        
        mlPlanComparisonChart = initializePlanComparisonChart();
        mlCostBreakdownChart = initializeCostBreakdownChart();
        mlAgeTrendChart = initializeAgeTrendChart();
        mlRiskAssessmentChart = initializeRiskAssessmentChart();
        
    } catch (error) {
        console.error('Chart initialization error:', error);
    }
}

function mlChangeChartType(chartName, type, event) {
    mlCurrentChartTypes[chartName] = type;
    
    const buttons = event.target.parentElement.querySelectorAll('.ml-chart-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    switch(chartName) {
        case 'plan':
            if (mlPlanComparisonChart) {
                mlPlanComparisonChart.destroy();
            }
            mlPlanComparisonChart = initializePlanComparisonChart();
            break;
            
        case 'breakdown':
            if (mlCostBreakdownChart) {
                mlCostBreakdownChart.destroy();
            }
            mlCostBreakdownChart = initializeCostBreakdownChart();
            break;
            
        case 'trend':
            if (mlAgeTrendChart) {
                mlAgeTrendChart.destroy();
            }
            mlAgeTrendChart = initializeAgeTrendChart();
            break;
            
        case 'risk':
            if (mlRiskAssessmentChart) {
                mlRiskAssessmentChart.destroy();
            }
            mlRiskAssessmentChart = initializeRiskAssessmentChart();
            break;
    }
}

function updateMLCharts(result, formData) {
    const planType = formData.plan_type;
    const age = parseInt(formData.age);
    const basePremium = result.annualPremium;
    
    mlCurrentChartData.plan.data = [
        planType === 'Term Life' ? basePremium : Math.round(basePremium * 0.95),
        planType === 'Whole Life' ? basePremium : Math.round(basePremium * 1.8),
        planType === 'Health' ? basePremium : Math.round(basePremium * 1.5),
        planType === 'Motor' ? basePremium : Math.round(basePremium * 1.3),
        planType === 'Critical Illness' ? basePremium : Math.round(basePremium * 1.7)
    ];
    
    mlCurrentChartData.breakdown.data = [38, 22, 18, 8, 12, 4];
    
    const ageTrendData = [];
    for (let i = 25; i <= 60; i += 5) {
        let factor = 1 + Math.pow((i - age) / 30, 2) * 0.5;
        ageTrendData.push(Math.round(basePremium * factor));
    }
    mlCurrentChartData.trend.data = ageTrendData;
    
    mlCurrentChartData.risk.data = [
        Math.min(age * 1.6, 95),
        formData.existing_conditions === 'None' ? 15 : 
        formData.existing_conditions === 'Minor' ? 45 :
        formData.existing_conditions === 'Moderate' ? 75 : 
        formData.existing_conditions === 'Major' ? 95 : 85,
        formData.occupation_risk === 'Low' ? 15 :
        formData.occupation_risk === 'Medium' ? 55 : 85,
        formData.smoker === 'Yes' ? 90 : formData.smoker === 'Former' ? 40 : 20,
        Math.min(parseInt(formData.coverage_amount) / 80000, 85)
    ];
    
    initializeMLCharts();
}

async function mlGeneratePrediction() {
    const requiredFields = ['mlAge', 'mlGender', 'mlCoverage', 'mlPlanType', 
                           'mlSmoker', 'mlOccupationRisk', 'mlMedicalConditions', 'mlPolicyTerm'];
    
    let isValid = true;
    
    const ageValue = document.getElementById('mlAge').value;
    const age = parseInt(ageValue);
    isValid = validateMLInput('mlAge', ageValue !== '' && age >= 18 && age <= 70) && isValid;
    
    requiredFields.slice(1).forEach(fieldId => {
        const value = document.getElementById(fieldId).value;
        isValid = validateMLInput(fieldId, value !== '') && isValid;
    });
    
    if (!isValid) {
        alert('Please fill in all required fields correctly.');
        return;
    }
    
    const predictBtn = document.getElementById('mlPredictBtn');
    const loadingSpinner = document.getElementById('mlLoadingSpinner');
    if (predictBtn) {
        predictBtn.disabled = true;
        predictBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    }
    if (loadingSpinner) loadingSpinner.style.display = 'block';
    
    try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        const formData = collectMLFormData();
        const result = mlCalculatePrediction(formData);
        
        // Store for export
        mlLastPredictionResult = result;
        mlLastFormData = formData;
        
        document.getElementById('mlAnnualPremium').textContent = `₹${result.annualPremium.toLocaleString()}`;
        document.getElementById('mlMonthlyPremium').textContent = `₹${result.monthlyPremium.toLocaleString()}`;
        document.getElementById('mlConfidence').textContent = `${result.confidence}%`;
        document.getElementById('mlSavings').textContent = `₹${result.savings.toLocaleString()}`;
        
        updateMLCharts(result, formData);
        generateMLInsights(result, formData);
        updateMLFactors(formData);
        
        const resultsSection = document.getElementById('mlResultsSection');
        if (resultsSection) {
            resultsSection.classList.add('show');
            resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        
    } catch (error) {
        console.error('Prediction error:', error);
        alert('Failed to generate prediction. Please check your inputs and try again.');
    } finally {
        if (predictBtn) {
            predictBtn.disabled = false;
            predictBtn.innerHTML = '<i class="fas fa-rocket"></i> Generate Smart Premium Analysis';
        }
        if (loadingSpinner) loadingSpinner.style.display = 'none';
    }
}

function generateMLInsights(result, data) {
    const insightsList = document.getElementById('mlInsightsList');
    if (!insightsList) return;
    
    insightsList.innerHTML = '';
    
    const insights = [
        {
            icon: 'fa-chart-line',
            text: `Your premium is ${result.annualPremium < 50000 ? 'below' : 'above'} average for your demographic`,
            type: result.annualPremium < 50000 ? 'low' : 'high'
        },
        {
            icon: 'fa-heartbeat',
            text: data.existing_conditions === 'None' ? 
                'Excellent health status contributes to lower premium rates' :
                'Consider wellness programs to potentially reduce premium costs',
            type: data.existing_conditions === 'None' ? 'low' : 'medium'
        },
        {
            icon: 'fa-smoking-ban',
            text: data.smoker === 'Yes' ? 
                'Quitting smoking could save ₹' + Math.round(result.annualPremium * 0.3).toLocaleString() + ' annually' :
                'Non-smoker status is saving you approximately ₹' + Math.round(result.annualPremium * 0.25).toLocaleString(),
            type: data.smoker === 'Yes' ? 'high' : 'low'
        },
        {
            icon: 'fa-shield-alt',
            text: `${data.plan_type} provides optimal coverage for your risk profile`,
            type: 'low'
        },
        {
            icon: 'fa-piggy-bank',
            text: `Consider increasing deductible to save up to ₹${Math.round(result.savings).toLocaleString()} annually`,
            type: 'low'
        }
    ];
    
    insights.forEach(insight => {
        const li = document.createElement('li');
        li.innerHTML = `
            <i class="fas ${insight.icon}"></i>
            <div>
                ${insight.text}
                <span class="risk-indicator risk-${insight.type}">${insight.type.toUpperCase()}</span>
            </div>
        `;
        insightsList.appendChild(li);
    });
}

function updateMLFactors(data) {
    const factorsList = document.getElementById('mlFactorsList');
    if (!factorsList) return;
    
    factorsList.innerHTML = '';
    
    const factors = [
        { name: 'Age', icon: 'fa-user', impact: calculateMLFactorImpact('age', data.age) },
        { name: 'Coverage Amount', icon: 'fa-shield-alt', impact: calculateMLFactorImpact('coverage', data.coverage_amount) },
        { name: 'Medical History', icon: 'fa-heartbeat', impact: calculateMLFactorImpact('medical', data.existing_conditions) },
        { name: 'Occupation Risk', icon: 'fa-hard-hat', impact: calculateMLFactorImpact('occupation', data.occupation_risk) },
        { name: 'Lifestyle', icon: 'fa-running', impact: calculateMLFactorImpact('lifestyle', data.smoker) },
        { name: 'Policy Term', icon: 'fa-calendar-alt', impact: calculateMLFactorImpact('term', data.policy_term) }
    ];
    
    factors.sort((a, b) => b.impact - a.impact);
    
    factors.forEach(factor => {
        const factorDiv = document.createElement('div');
        factorDiv.className = 'ml-factor-item';
        factorDiv.innerHTML = `
            <div class="ml-factor-header">
                <span class="ml-factor-name">
                    <i class="fas ${factor.icon}"></i>
                    ${factor.name}
                </span>
                <span class="ml-factor-impact">${factor.impact}%</span>
            </div>
            <div class="ml-factor-bar">
                <div class="ml-factor-fill" style="width: ${Math.min(factor.impact, 100)}%"></div>
            </div>
        `;
        factorsList.appendChild(factorDiv);
    });
}

function calculateMLFactorImpact(type, value) {
    if (!value) return 0;
    
    switch(type) {
        case 'age':
            const age = parseInt(value);
            if (age < 25) return 18;
            if (age < 35) return 28;
            if (age < 50) return 52;
            return 72;
            
        case 'coverage':
            const coverage = parseInt(value);
            if (coverage <= 1000000) return 35;
            if (coverage <= 5000000) return 62;
            return 82;
            
        case 'medical':
            switch(value) {
                case 'None': return 12;
                case 'Minor': return 32;
                case 'Moderate': return 58;
                case 'Major': return 88;
                case 'Chronic': return 75;
                default: return 25;
            }
            
        case 'occupation':
            switch(value) {
                case 'Low': return 18;
                case 'Medium': return 42;
                case 'High': return 68;
                default: return 25;
            }
            
        case 'lifestyle':
            switch(value) {
                case 'No': return 12;
                case 'Former': return 35;
                case 'Yes': return 78;
                default: return 20;
            }
            
        case 'term':
            const term = parseInt(value);
            if (term <= 10) return 25;
            if (term <= 20) return 48;
            return 65;
            
        default:
            return 25;
    }
}

// ===== EXPORT REPORT FUNCTIONALITY =====

function mlExportReport() {
    if (!mlLastPredictionResult || !mlLastFormData) {
        alert('Please generate a prediction first before exporting.');
        return;
    }
    
    // Show export modal
    showExportModal();
}

function showExportModal() {
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'ml-export-modal';
    modal.id = 'mlExportModal';
    modal.innerHTML = `
        <div class="ml-export-modal-content">
            <h3><i class="fas fa-download"></i> Export Report</h3>
            <div class="ml-export-options">
                <div class="ml-export-option" onclick="exportAsPDF()">
                    <i class="fas fa-file-pdf"></i>
                    <div class="ml-export-option-text">
                        <h4>Export as PDF</h4>
                        <p>Download a comprehensive PDF report</p>
                    </div>
                </div>
                <div class="ml-export-option" onclick="exportAsHTML()">
                    <i class="fas fa-file-code"></i>
                    <div class="ml-export-option-text">
                        <h4>Export as HTML</h4>
                        <p>Download an HTML file for viewing</p>
                    </div>
                </div>
                <div class="ml-export-option" onclick="printReport()">
                    <i class="fas fa-print"></i>
                    <div class="ml-export-option-text">
                        <h4>Print Report</h4>
                        <p>Open print dialog to print or save as PDF</p>
                    </div>
                </div>
            </div>
            <button class="ml-export-cancel" onclick="closeExportModal()">Cancel</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close on outside click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeExportModal();
        }
    });
}

function closeExportModal() {
    const modal = document.getElementById('mlExportModal');
    if (modal) {
        modal.remove();
    }
}

function generateReportHTML() {
    const result = mlLastPredictionResult;
    const data = mlLastFormData;
    const currentDate = new Date().toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    // Format coverage amount
    const coverageFormatted = parseInt(data.coverage_amount).toLocaleString('en-IN');
    
    // Generate insights text
    const insightsHTML = generateInsightsForExport(result, data);
    
    // Generate factors HTML
    const factorsHTML = generateFactorsForExport(data);
    
    // Generate plan comparison data
    const planComparisonHTML = generatePlanComparisonForExport(result, data);
    
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smart Insurance Premium Prediction Report</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background: #f5f5f5;
        }
        
        .report-container {
            max-width: 900px;
            margin: 0 auto;
            background: white;
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
        }
        
        .report-header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 40px;
            text-align: center;
        }
        
        .report-header h1 {
            font-size: 2rem;
            margin-bottom: 10px;
        }
        
        .report-header p {
            opacity: 0.9;
            font-size: 1rem;
        }
        
        .report-meta {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid rgba(255,255,255,0.3);
            font-size: 0.9rem;
        }
        
        .report-section {
            padding: 30px 40px;
            border-bottom: 1px solid #eee;
        }
        
        .report-section:last-child {
            border-bottom: none;
        }
        
        .section-title {
            font-size: 1.4rem;
            color: #667eea;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #667eea;
        }
        
        .premium-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
        }
        
        .premium-card {
            background: linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 100%);
            padding: 25px;
            border-radius: 10px;
            text-align: center;
            border-left: 4px solid #667eea;
        }
        
        .premium-card.highlight {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border-left: none;
        }
        
        .premium-label {
            font-size: 0.9rem;
            opacity: 0.8;
            margin-bottom: 10px;
        }
        
        .premium-value {
            font-size: 2rem;
            font-weight: bold;
            color: #667eea;
        }
        
        .premium-card.highlight .premium-value {
            color: white;
        }
        
        .profile-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
        }
        
        .profile-item {
            display: flex;
            justify-content: space-between;
            padding: 12px 15px;
            background: #f8f9fa;
            border-radius: 6px;
        }
        
        .profile-label {
            color: #666;
        }
        
        .profile-value {
            font-weight: 600;
            color: #333;
        }
        
        .insight-item {
            padding: 15px;
            background: #f8f9ff;
            border-left: 4px solid #667eea;
            margin-bottom: 15px;
            border-radius: 0 8px 8px 0;
        }
        
        .insight-item.risk-low {
            border-left-color: #22c55e;
            background: #f0fdf4;
        }
        
        .insight-item.risk-medium {
            border-left-color: #eab308;
            background: #fefce8;
        }
        
        .insight-item.risk-high {
            border-left-color: #ef4444;
            background: #fef2f2;
        }
        
        .factor-item {
            margin-bottom: 20px;
        }
        
        .factor-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 8px;
        }
        
        .factor-name {
            font-weight: 600;
        }
        
        .factor-impact {
            color: #667eea;
            font-weight: bold;
        }
        
        .factor-bar {
            height: 10px;
            background: #e5e7eb;
            border-radius: 5px;
            overflow: hidden;
        }
        
        .factor-fill {
            height: 100%;
            background: linear-gradient(90deg, #667eea, #764ba2);
            border-radius: 5px;
        }
        
        .plan-table {
            width: 100%;
            border-collapse: collapse;
        }
        
        .plan-table th,
        .plan-table td {
            padding: 12px 15px;
            text-align: left;
            border-bottom: 1px solid #eee;
        }
        
        .plan-table th {
            background: #f8f9fa;
            font-weight: 600;
            color: #333;
        }
        
        .plan-table tr:hover {
            background: #f8f9ff;
        }
        
        .plan-table .current {
            background: linear-gradient(135deg, #f0f4ff 0%, #e8edff 100%);
            font-weight: 600;
        }
        
        .report-footer {
            background: #f8f9fa;
            padding: 30px 40px;
            text-align: center;
            color: #666;
            font-size: 0.85rem;
        }
        
        .disclaimer {
            background: #fff3cd;
            border: 1px solid #ffc107;
            padding: 15px;
            border-radius: 8px;
            margin-top: 20px;
            font-size: 0.85rem;
            color: #856404;
        }
        
        @media print {
            body {
                background: white;
            }
            
            .report-container {
                box-shadow: none;
            }
            
            .report-section {
                page-break-inside: avoid;
            }
        }
    </style>
</head>
<body>
    <div class="report-container">
        <div class="report-header">
            <h1>🤖 Smart Insurance Premium Prediction Report</h1>
            <p>Comprehensive analysis generated by our advanced machine learning algorithms</p>
            <div class="report-meta">
                <span>📅 Generated: ${currentDate}</span>
                <span>🎯 Confidence: ${result.confidence}%</span>
                <span>📊 Report ID: ML-${Date.now().toString(36).toUpperCase()}</span>
            </div>
        </div>
        
        <div class="report-section">
            <h2 class="section-title">💰 Premium Summary</h2>
            <div class="premium-grid">
                <div class="premium-card highlight">
                    <div class="premium-label">Annual Premium</div>
                    <div class="premium-value">₹${result.annualPremium.toLocaleString()}</div>
                </div>
                <div class="premium-card">
                    <div class="premium-label">Monthly Premium</div>
                    <div class="premium-value">₹${result.monthlyPremium.toLocaleString()}</div>
                </div>
                <div class="premium-card">
                    <div class="premium-label">Prediction Confidence</div>
                    <div class="premium-value">${result.confidence}%</div>
                </div>
                <div class="premium-card">
                    <div class="premium-label">Potential Savings</div>
                    <div class="premium-value">₹${result.savings.toLocaleString()}</div>
                </div>
            </div>
        </div>
        
        <div class="report-section">
            <h2 class="section-title">👤 Profile Summary</h2>
            <div class="profile-grid">
                <div class="profile-item">
                    <span class="profile-label">Age</span>
                    <span class="profile-value">${data.age} years</span>
                </div>
                <div class="profile-item">
                    <span class="profile-label">Gender</span>
                    <span class="profile-value">${data.gender}</span>
                </div>
                <div class="profile-item">
                    <span class="profile-label">Coverage Amount</span>
                    <span class="profile-value">₹${coverageFormatted}</span>
                </div>
                <div class="profile-item">
                    <span class="profile-label">Plan Type</span>
                    <span class="profile-value">${data.plan_type}</span>
                </div>
                <div class="profile-item">
                    <span class="profile-label">Smoking Status</span>
                    <span class="profile-value">${data.smoker === 'Yes' ? 'Smoker' : data.smoker === 'Former' ? 'Former Smoker' : 'Non-Smoker'}</span>
                </div>
                <div class="profile-item">
                    <span class="profile-label">Occupation Risk</span>
                    <span class="profile-value">${data.occupation_risk} Risk</span>
                </div>
                <div class="profile-item">
                    <span class="profile-label">Medical Conditions</span>
                    <span class="profile-value">${data.existing_conditions}</span>
                </div>
                <div class="profile-item">
                    <span class="profile-label">Policy Term</span>
                    <span class="profile-value">${data.policy_term} Years</span>
                </div>
            </div>
        </div>
        
        <div class="report-section">
            <h2 class="section-title">📊 Plan Comparison</h2>
            ${planComparisonHTML}
        </div>
        
        <div class="report-section">
            <h2 class="section-title">💡 Data-Driven Insights</h2>
            ${insightsHTML}
        </div>
        
        <div class="report-section">
            <h2 class="section-title">⚖️ Risk Factor Analysis</h2>
            ${factorsHTML}
        </div>
        
        <div class="report-section">
            <h2 class="section-title">📈 Cost Breakdown</h2>
            <table class="plan-table">
                <thead>
                    <tr>
                        <th>Component</th>
                        <th>Percentage</th>
                        <th>Amount (Approx.)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Base Premium</td>
                        <td>38%</td>
                        <td>₹${Math.round(result.annualPremium * 0.38).toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td>Risk Loading</td>
                        <td>22%</td>
                        <td>₹${Math.round(result.annualPremium * 0.22).toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td>Plan Premium</td>
                        <td>18%</td>
                        <td>₹${Math.round(result.annualPremium * 0.18).toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td>Admin Fees</td>
                        <td>8%</td>
                        <td>₹${Math.round(result.annualPremium * 0.08).toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td>GST (18%)</td>
                        <td>12%</td>
                        <td>₹${Math.round(result.annualPremium * 0.12).toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td>Profit Margin</td>
                        <td>4%</td>
                        <td>₹${Math.round(result.annualPremium * 0.04).toLocaleString()}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div class="report-footer">
            <div class="disclaimer">
                <strong>⚠️ Disclaimer:</strong> This report is generated by machine learning algorithms for informational purposes only. 
                Actual premium rates may vary based on insurer policies, medical underwriting, and other factors. 
                Please consult with a licensed insurance advisor for accurate quotes and personalized recommendations.
            </div>
            <p style="margin-top: 20px;">
                Generated by Smart Insurance Premium Predictor | © ${new Date().getFullYear()} All Rights Reserved
            </p>
        </div>
    </div>
</body>
</html>
    `;
}

function generateInsightsForExport(result, data) {
    const insights = [
        {
            text: `Your premium is ${result.annualPremium < 50000 ? 'below' : 'above'} average for your demographic`,
            type: result.annualPremium < 50000 ? 'low' : 'high'
        },
        {
            text: data.existing_conditions === 'None' ? 
                'Excellent health status contributes to lower premium rates' :
                'Consider wellness programs to potentially reduce premium costs',
            type: data.existing_conditions === 'None' ? 'low' : 'medium'
        },
        {
            text: data.smoker === 'Yes' ? 
                `Quitting smoking could save ₹${Math.round(result.annualPremium * 0.3).toLocaleString()} annually` :
                `Non-smoker status is saving you approximately ₹${Math.round(result.annualPremium * 0.25).toLocaleString()}`,
            type: data.smoker === 'Yes' ? 'high' : 'low'
        },
        {
            text: `${data.plan_type} provides optimal coverage for your risk profile`,
            type: 'low'
        },
        {
            text: `Consider increasing deductible to save up to ₹${Math.round(result.savings).toLocaleString()} annually`,
            type: 'low'
        }
    ];
    
    return insights.map(insight => `
        <div class="insight-item risk-${insight.type}">
            ${insight.text}
        </div>
    `).join('');
}

function generateFactorsForExport(data) {
    const factors = [
        { name: 'Age', impact: calculateMLFactorImpact('age', data.age) },
        { name: 'Coverage Amount', impact: calculateMLFactorImpact('coverage', data.coverage_amount) },
        { name: 'Medical History', impact: calculateMLFactorImpact('medical', data.existing_conditions) },
        { name: 'Occupation Risk', impact: calculateMLFactorImpact('occupation', data.occupation_risk) },
        { name: 'Lifestyle (Smoking)', impact: calculateMLFactorImpact('lifestyle', data.smoker) },
        { name: 'Policy Term', impact: calculateMLFactorImpact('term', data.policy_term) }
    ];
    
    factors.sort((a, b) => b.impact - a.impact);
    
    return factors.map(factor => `
        <div class="factor-item">
            <div class="factor-header">
                <span class="factor-name">${factor.name}</span>
                <span class="factor-impact">${factor.impact}%</span>
            </div>
            <div class="factor-bar">
                <div class="factor-fill" style="width: ${factor.impact}%"></div>
            </div>
        </div>
    `).join('');
}

function generatePlanComparisonForExport(result, data) {
    const basePremium = result.annualPremium;
    const plans = [
        { name: 'Term Life', premium: data.plan_type === 'Term Life' ? basePremium : Math.round(basePremium * 0.95), current: data.plan_type === 'Term Life' },
        { name: 'Whole Life', premium: data.plan_type === 'Whole Life' ? basePremium : Math.round(basePremium * 1.8), current: data.plan_type === 'Whole Life' },
        { name: 'Health', premium: data.plan_type === 'Health' ? basePremium : Math.round(basePremium * 1.5), current: data.plan_type === 'Health' },
        { name: 'Motor', premium: data.plan_type === 'Motor' ? basePremium : Math.round(basePremium * 1.3), current: data.plan_type === 'Motor' },
        { name: 'Critical Illness', premium: data.plan_type === 'Critical Illness' ? basePremium : Math.round(basePremium * 1.7), current: data.plan_type === 'Critical Illness' }
    ];
    
    const rows = plans.map(plan => `
        <tr class="${plan.current ? 'current' : ''}">
            <td>${plan.name} ${plan.current ? '(Selected)' : ''}</td>
            <td>₹${plan.premium.toLocaleString()}</td>
            <td>₹${Math.round(plan.premium / 12).toLocaleString()}/month</td>
        </tr>
    `).join('');
    
    return `
        <table class="plan-table">
            <thead>
                <tr>
                    <th>Plan Type</th>
                    <th>Annual Premium</th>
                    <th>Monthly Equivalent</th>
                </tr>
            </thead>
            <tbody>
                ${rows}
            </tbody>
        </table>
    `;
}

function exportAsPDF() {
    closeExportModal();
    
    // Generate HTML content
    const htmlContent = generateReportHTML();
    
    // Open in new window for printing
    const printWindow = window.open('', '_blank', 'width=900,height=700');
    printWindow.document.write(htmlContent);
    printWindow.document.close();
    
    // Wait for content to load then trigger print
    printWindow.onload = function() {
        setTimeout(() => {
            printWindow.print();
        }, 500);
    };
}

function exportAsHTML() {
    closeExportModal();
    
    // Generate HTML content
    const htmlContent = generateReportHTML();
    
    // Create blob and download
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Insurance_Premium_Report_${Date.now()}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    // Show success message
    showExportSuccess('HTML file downloaded successfully!');
}

function printReport() {
    closeExportModal();
    
    // Generate HTML content
    const htmlContent = generateReportHTML();
    
    // Open in new window for printing
    const printWindow = window.open('', '_blank', 'width=900,height=700');
    printWindow.document.write(htmlContent);
    printWindow.document.close();
    
    // Wait for content to load then trigger print
    printWindow.onload = function() {
        setTimeout(() => {
            printWindow.print();
        }, 500);
    };
}

function showExportSuccess(message) {
    // Create toast notification
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        z-index: 10001;
        display: flex;
        align-items: center;
        gap: 10px;
        animation: slideInRight 0.5s ease;
    `;
    toast.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    
    // Add animation keyframe
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(styleSheet);
    
    document.body.appendChild(toast);
    
    // Remove after 3 seconds
    setTimeout(() => {
        toast.style.animation = 'slideInRight 0.5s ease reverse';
        setTimeout(() => {
            toast.remove();
            styleSheet.remove();
        }, 500);
    }, 3000);
}

function mlComparePlans() {
    const compareMenuItem = document.querySelector('.menu-item[data-page="compare"]');
    
    if (compareMenuItem) {
        compareMenuItem.click();
        
        setTimeout(() => {
            const comparePlansTop = document.getElementById('compare-plans-top');
            if (comparePlansTop) {
                comparePlansTop.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            } else {
                const comparePlansSection = document.getElementById('compare-plans-section');
                if (comparePlansSection) {
                    comparePlansSection.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start' 
                    });
                }
            }
        }, 300);
    } else {
        const comparePlansTop = document.getElementById('compare-plans-top');
        if (comparePlansTop) {
            comparePlansTop.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    }
}

function mlResetForm() {
    // Reset all inputs
    document.querySelectorAll('.ml-input-control').forEach(input => {
        if (input.tagName === 'SELECT') {
            input.value = '';
        } else {
            input.value = '';
        }
    });
    
    // Reset range indicators
    document.querySelectorAll('.range-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Hide results and preview
    document.getElementById('mlResultsSection')?.classList.remove('show');
    document.getElementById('livePreview')?.classList.remove('show');
    
    // Reset stored data
    mlLastPredictionResult = null;
    mlLastFormData = null;
    
    // Reset chart types to default
    mlCurrentChartTypes = {
        plan: 'bar',
        breakdown: 'doughnut',
        trend: 'line',
        risk: 'radar'
    };
    
    // Reset chart data
    mlCurrentChartData = {
        plan: {
            labels: ['Term Life', 'Whole Life', 'Health', 'Motor', 'Critical Illness'],
            data: [0, 0, 0, 0, 0]
        },
        breakdown: {
            labels: ['Base Premium', 'Risk Loading', 'Plan Premium', 'Admin Fees', 'GST', 'Profit Margin'],
            data: [0, 0, 0, 0, 0, 0]
        },
        trend: {
            labels: ['25', '30', '35', '40', '45', '50', '55', '60'],
            data: [0, 0, 0, 0, 0, 0, 0, 0]
        },
        risk: {
            labels: ['Age Risk', 'Health Risk', 'Occupation', 'Lifestyle', 'Coverage'],
            data: [0, 0, 0, 0, 0]
        }
    };
    
    // Reset button states
    document.querySelectorAll('.ml-chart-controls').forEach(controls => {
        const buttons = controls.querySelectorAll('.ml-chart-btn');
        buttons.forEach((btn, index) => {
            if (index === 0) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    });
    
    // Destroy existing charts
    if (mlPlanComparisonChart) {
        mlPlanComparisonChart.destroy();
        mlPlanComparisonChart = null;
    }
    if (mlCostBreakdownChart) {
        mlCostBreakdownChart.destroy();
        mlCostBreakdownChart = null;
    }
    if (mlAgeTrendChart) {
        mlAgeTrendChart.destroy();
        mlAgeTrendChart = null;
    }
    if (mlRiskAssessmentChart) {
        mlRiskAssessmentChart.destroy();
        mlRiskAssessmentChart = null;
    }
    
    // Clear insights and factors
    const insightsList = document.getElementById('mlInsightsList');
    if (insightsList) insightsList.innerHTML = '';
    
    const factorsList = document.getElementById('mlFactorsList');
    if (factorsList) factorsList.innerHTML = '';
    
    // Scroll to top
    document.querySelector('.ml-input-section')?.scrollIntoView({ behavior: 'smooth' });
}