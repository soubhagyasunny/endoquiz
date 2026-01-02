   const questions =[
  // Section 1: Functional Anatomy & Development of Pituitary Gland
  {
    q: "What is the approximate weight of the pituitary gland in an adult?",
    options: ["0.1 g", "0.5 g", "1.5 g", "5.0 g"],
    correct: 1
  },
  {
    q: "The pituitary gland is located in which depression of the sphenoid bone?",
    options: ["Cribriform plate", "Sella turcica", "Pterygoid fossa", "Optic canal"],
    correct: 1
  },
  {
    q: "Which structure separates the pituitary gland from the brain?",
    options: ["Tentorium cerebelli", "Falx cerebri", "Diaphragma sellae", "Corpus callosum"],
    correct: 2
  },
  {
    q: "The anterior pituitary develops from which embryonic structure?",
    options: ["Neuroectoderm", "Rathke’s pouch", "Tuber cinereum", "Neural crest"],
    correct: 1
  },
  {
    q: "The posterior pituitary develops from:",
    options: ["Oral ectoderm", "Pharyngeal pouch", "Neuroectoderm of the hypothalamus", "Endoderm"],
    correct: 2
  },
  {
    q: "Which part of the adenohypophysis is rudimentary in humans?",
    options: ["Pars distalis", "Pars tuberalis", "Pars intermedia", "Pars nervosa"],
    correct: 2
  },
  {
    q: "The 'neural stalk' consists of the infundibulum and:",
    options: ["Pars distalis", "Median eminence", "Pars tuberalis", "Mammillary body"],
    correct: 1
  },
  {
    q: "Which artery supplies the primary capillary plexus in the median eminence?",
    options: ["Inferior hypophyseal artery", "Superior hypophyseal artery", "Anterior cerebral artery", "Basilar artery"],
    correct: 1
  },
  {
    q: "The hypothalamus communicates with the anterior pituitary primarily via:",
    options: ["The hypothalamo-hypophyseal tract", "The hypothalamo-hypophyseal portal system", "Direct neural innervation", "Systemic circulation"],
    correct: 1
  },
  {
    q: "Chromophils constitute what percentage of anterior pituitary cells?",
    options: ["20%", "35%", "50%", "80%"],
    correct: 2
  },
  {
    q: "Which cells are considered 'agranular' precursors in the anterior pituitary?",
    options: ["Acidophils", "Basophils", "Chromophobes", "Pituicytes"],
    correct: 2
  },
  {
    q: "Acidophils make up approximately what percentage of chromophils?",
    options: ["15%", "35%", "50%", "75%"],
    correct: 1
  },
  {
    q: "Somatotrophs are located mainly in which part of the anterior lobe?",
    options: ["Center", "Lateral wings", "Posterior rim", "Pars tuberalis"],
    correct: 1
  },
  {
    q: "Which dye stains the granules of acidophilic cells?",
    options: ["Haematoxylin", "Eosin", "Aldehyde fuchsin", "Silver stain"],
    correct: 1
  },
  {
    q: "Which of the following cells are Basophils?",
    options: ["Somatotrophs", "Mammotrophs", "Thyrotrophs", "Lactotrophs"],
    correct: 2
  },
  {
    q: "Gonadotrophs secrete:",
    options: ["GH and PRL", "TSH only", "ACTH and MSH", "LH and FSH"],
    correct: 3
  },
  {
    q: "Corticotrophs secrete:",
    options: ["TSH", "ACTH and beta-lipotropins", "GH", "Prolactin"],
    correct: 1
  },
  {
    q: "Pituicytes are found in the:",
    options: ["Pars distalis", "Pars tuberalis", "Neurohypophysis", "Rathke's pouch"],
    correct: 2
  },
  {
    q: "Herring bodies are:",
    options: ["Cell bodies in the hypothalamus", "Dilated nerve terminals containing stored hormones", "Capillary networks", "Support cells"],
    correct: 1
  },
  {
    q: "The blood flow to the pituitary drains into the:",
    options: ["Superior sagittal sinus", "Cavernous sinus", "Internal jugular vein directly", "Portal vein"],
    correct: 1
  },

  // Section 2: Hypothalamic Control & Anterior Pituitary Hormones
  {
    q: "Which hypothalamic nucleus contains parvicellular neurons that secrete releasing hormones?",
    options: ["Supraoptic nucleus", "Arcuate nucleus", "Lateral geniculate body", "Mammillary body"],
    correct: 1
  },
  {
    q: "Growth Hormone-Releasing Hormone (GHRH) stimulates GH release via which second messenger?",
    options: ["cGMP", "cAMP", "Tyrosine kinase", "Inositol triphosphate"],
    correct: 1
  },
  {
    q: "Somatostatin is also known as:",
    options: ["Growth Hormone-Releasing Hormone", "Growth Hormone Release-Inhibiting Hormone (GRIH)", "Prolactin Inhibiting Hormone", "Gonadotropin Releasing Hormone"],
    correct: 1
  },
  {
    q: "Dopamine functions as:",
    options: ["Prolactin Releasing Hormone", "Prolactin Inhibiting Hormone (PIH)", "Thyrotropin Releasing Hormone", "Corticotropin Releasing Hormone"],
    correct: 1
  },
  {
    q: "TSH, LH, and FSH are classified as:",
    options: ["Steroid hormones", "Glycoprotein hormones", "POMC peptides", "Amines"],
    correct: 1
  },
  {
    q: "Which subunit confers biological specificity to glycoprotein hormones?",
    options: ["alpha-subunit", "beta-subunit", "gamma-subunit", "Pre-sequence"],
    correct: 1
  },
  {
    q: "The alpha-subunit of TSH is identical to that of:",
    options: ["GH", "ACTH", "LH and FSH", "Prolactin"],
    correct: 2
  },
  {
    q: "Pro-opiomelanocortin (POMC) is the precursor for:",
    options: ["GH and PRL", "TSH and LH", "ACTH, beta-LPH, and beta-endorphin", "Oxytocin and ADH"],
    correct: 2
  },
  {
    q: "Growth Hormone consists of a single chain of how many amino acids?",
    options: ["100", "191", "200", "241"],
    correct: 1
  },
  {
    q: "The gene for human GH is located on which chromosome?",
    options: ["1", "6", "17", "21"],
    correct: 2
  },
  {
    q: "Human Chorionic Somatomammotropin (hCS) has 85% homology with:",
    options: ["TSH", "ACTH", "GH", "LH"],
    correct: 2
  },
  {
    q: "Growth Hormone acts on target cells via which signaling pathway?",
    options: ["G-protein coupled receptors", "JAK-STAT pathway", "Adenylyl cyclase - cAMP", "Ion channels"],
    correct: 1
  },
  {
    q: "The GH receptor belongs to which family?",
    options: ["Nuclear receptors", "Cytokine receptor family", "Tyrosine kinase receptors", "Serine kinase receptors"],
    correct: 1
  },
  {
    q: "The majority of circulating GH is bound to:",
    options: ["Albumin", "GH-binding protein (GHBP)", "Transcortin", "SHBG"],
    correct: 1
  },
  {
    q: "What is the plasma half-life of Growth Hormone?",
    options: ["1-2 minutes", "6-20 minutes", "1-2 hours", "24 hours"],
    correct: 1
  },
  {
    q: "GH stimulates the liver to produce:",
    options: ["Somatostatin", "Somatomedins (IGFs)", "GHRH", "Insulin"],
    correct: 1
  },
  {
    q: "Which Somatomedin is primarily responsible for skeletal growth after birth?",
    options: ["IGF-I (Somatomedin C)", "IGF-II", "MSA", "Relaxin"],
    correct: 0
  },
  {
    q: "Which Somatomedin is independent of GH and important for fetal growth?",
    options: ["IGF-I", "IGF-II", "Vitronectin", "Fibronectin"],
    correct: 1
  },
  {
    q: "GH promotes bone growth by stimulating proliferation of:",
    options: ["Osteoclasts", "Chondrocytes", "Fibroblasts", "Myocytes"],
    correct: 1
  },
  {
    q: "The metabolic effect of GH on protein is:",
    options: ["Catabolic", "Anabolic (Positive Nitrogen Balance)", "Neutral", "Increases urea excretion"],
    correct: 1
  },
  {
    q: "The effect of GH on fat metabolism is:",
    options: ["Lipogenesis", "Lipolysis", "Inhibition of beta-oxidation", "Cholesterol synthesis"],
    correct: 1
  },
  {
    q: "GH is considered 'diabetogenic' because it:",
    options: ["Increases glucose uptake by cells", "Decreases hepatic glucose output", "Increases insulin resistance and blood glucose", "Stimulates glycolysis"],
    correct: 2
  },
  {
    q: "Which substrate increase stimulates GH secretion?",
    options: ["Glucose", "Free Fatty Acids", "Amino acids (e.g., Arginine)", "Cortisol"],
    correct: 2
  },
  {
    q: "Hypoglycemia has what effect on GH secretion?",
    options: ["Inhibits", "Stimulates", "No effect", "Causes pulsatile suppression"],
    correct: 1
  },
  {
    q: "Deep sleep (Stages 3 & 4) is associated with:",
    options: ["Suppression of GH", "A peak in GH secretion", "Constant GH levels", "Decreased IGF-1"],
    correct: 1
  },
  {
    q: "Obesity generally:",
    options: ["Stimulates GH secretion", "Inhibits/Decreases GH secretion", "Has no effect", "Increases GH pulse frequency"],
    correct: 1
  },
  {
    q: "GHRH inhibits its own secretion via:",
    options: ["Long loop feedback", "Ultrashort feedback loop", "Positive feedback", "Paracrine action"],
    correct: 1
  },
  {
    q: "African pygmies have short stature due to:",
    options: ["GH deficiency", "Lack of GH receptors", "Failure to produce IGF-1", "Malnutrition"],
    correct: 2
  },
  {
    q: "Laron dwarfism is caused by:",
    options: ["GH deficiency", "GH receptor insensitivity/deficiency", "IGF-1 receptor defect", "GHRH deficiency"],
    correct: 1
  },
  {
    q: "Pituitary dwarfism is characterized by:",
    options: ["Mental retardation", "Disproportionate growth", "Proportionate stunted growth", "Early puberty"],
    correct: 2
  },
  {
    q: "Acromegaly is caused by excess GH:",
    options: ["Before epiphyseal closure", "After epiphyseal closure", "In fetal life", "Due to thyroid failure"],
    correct: 1
  },
  {
    q: "Gigantism occurs due to excess GH:",
    options: ["In adults", "Before epiphyseal closure (in children)", "Due to steroid use", "In old age"],
    correct: 1
  },
  {
    q: "A characteristic feature of Acromegaly is:",
    options: ["Micrognathia", "Prognathism", "Hypotension", "Thin skin"],
    correct: 1
  },
  {
    q: "In the glucose tolerance test for Acromegaly, GH levels:",
    options: ["Suppress to < 2 ng/mL", "Fail to suppress or paradoxically rise", "Drop to zero", "Are not measured"],
    correct: 1
  },
  {
    q: "Which drug is a somatostatin analogue used to treat Acromegaly?",
    options: ["Bromocriptine", "Octreotide", "Pegvisomant", "Cabergoline"],
    correct: 1
  },
  {
    q: "Panhypopituitarism first manifests as a deficiency of:",
    options: ["ACTH", "TSH", "Gonadotropins and GH", "ADH"],
    correct: 2
  },
  {
    q: "Sheehan syndrome is caused by:",
    options: ["Pituitary tumor", "Postpartum pituitary necrosis", "Head injury", "Tuberculosis"],
    correct: 1
  },

  // Section 3: Posterior Pituitary (Neurohypophysis)
  {
    q: "Which two hormones are secreted by the posterior pituitary?",
    options: ["GH and TSH", "ADH and Oxytocin", "LH and FSH", "ACTH and MSH"],
    correct: 1
  },
  {
    q: "Where are ADH and Oxytocin synthesized?",
    options: ["Posterior Pituitary", "Supraoptic and Paraventricular nuclei of hypothalamus", "Pituicytes", "Median eminence"],
    correct: 1
  },
  {
    q: "The precursor for ADH is:",
    options: ["Preprooxyphysin", "Prepropressophysin", "POMC", "Proinsulin"],
    correct: 1
  },
  {
    q: "ADH is transported down the axon bound to:",
    options: ["Albumin", "Neurophysin II", "Neurophysin I", "Globulin"],
    correct: 1
  },
  {
    q: "The biological half-life of ADH is:",
    options: ["1 minute", "10-20 minutes", "1 hour", "4 hours"],
    correct: 1
  },
  {
    q: "The primary physiologic stimulus for ADH secretion is:",
    options: ["Increased blood volume", "Increased plasma osmolality", "Decreased plasma osmolality", "Hypertension"],
    correct: 1
  },
  {
    q: "A change in plasma osmolality of what percentage can trigger ADH release?",
    options: ["1%", "5%", "10%", "15%"],
    correct: 0
  },
  {
    q: "Which receptors monitor plasma osmolality?",
    options: ["Baroreceptors in carotid sinus", "Osmoreceptors in anterior hypothalamus", "J-receptors in lungs", "Macula densa"],
    correct: 1
  },
  {
    q: "High pressure baroreceptors that inhibit ADH are located in:",
    options: ["Atria", "Carotid sinus and Aortic arch", "Pulmonary veins", "Vena cava"],
    correct: 1
  },
  {
    q: "Which substance inhibits ADH secretion?",
    options: ["Nicotine", "Morphine", "Alcohol", "Nausea"],
    correct: 2
  },
  {
    q: "ADH acts on the kidney via which receptor subtype?",
    options: ["V1a", "V1b", "V2", "V3"],
    correct: 2
  },
  {
    q: "V2 receptors utilize which second messenger system?",
    options: ["Phospholipase C", "Adenylyl cyclase - cAMP", "cGMP", "Calcium"],
    correct: 1
  },
  {
    q: "ADH causes insertion of which water channels into the luminal membrane?",
    options: ["Aquaporin 1", "Aquaporin 2", "Aquaporin 3", "Aquaporin 4"],
    correct: 1
  },
  {
    q: "V1 receptors primarily mediate:",
    options: ["Antidiuresis", "Vasoconstriction", "Glycogenolysis", "ACTH release"],
    correct: 1
  },
  {
    q: "Diabetes Insipidus (DI) is characterized by:",
    options: ["Oliguria", "Polyuria and Polydipsia", "Hypernatremia", "Glycosuria"],
    correct: 1
  },
  {
    q: "Central DI is caused by:",
    options: ["Renal resistance to ADH", "Failure of ADH secretion", "Excess water intake", "Mutation in V2 receptor"],
    correct: 1
  },
  {
    q: "Nephrogenic DI is caused by:",
    options: ["Hypothalamic tumor", "Lack of ADH", "Renal unresponsiveness to ADH", "Psychogenic polydipsia"],
    correct: 2
  },
  {
    q: "Which test differentiates Cranial from Nephrogenic DI?",
    options: ["Water deprivation test followed by Vasopressin injection", "Glucose tolerance test", "Insulin tolerance test", "Saline infusion test"],
    correct: 0
  },
  {
    q: "In Nephrogenic DI, administration of vasopressin results in:",
    options: ["Increase in urine osmolality", "No rise in urine osmolality", "Decrease in urine output", "Hyponatremia"],
    correct: 1
  },
  {
    q: "SIADH (Syndrome of Inappropriate ADH) leads to:",
    options: ["Hypernatremia", "Dilutional Hyponatremia", "Dehydration", "High urine volume"],
    correct: 1
  },
  {
    q: "A drug used to treat Nephrogenic DI is:",
    options: ["Desmopressin", "Thiazide diuretics", "Furosemide", "Lithium"],
    correct: 1
  },
  {
    q: "A drug used to treat Central DI is:",
    options: ["Tolvaptan", "Desmopressin (DDAVP)", "Demeclocycline", "Spironolactone"],
    correct: 1
  },

  // Section 4: Thyroid Gland Anatomy & Synthesis
  {
    q: "What is the weight of the thyroid gland in adults?",
    options: ["5-10 g", "15-25 g", "40-50 g", "100 g"],
    correct: 1
  },
  {
    q: "The functional unit of the thyroid gland is the:",
    options: ["Lobule", "Acinus (Follicle)", "Parafollicular cell", "C-cell"],
    correct: 1
  },
  {
    q: "Thyroid follicles are filled with:",
    options: ["Blood", "Colloid", "Lymph", "Air"],
    correct: 1
  },
  {
    q: "The major protein in colloid is:",
    options: ["Albumin", "Thyroglobulin", "Myoglobin", "Fibrin"],
    correct: 1
  },
  {
    q: "Parafollicular cells (C cells) secrete:",
    options: ["Thyroxine", "Calcitonin", "Parathyroid hormone", "TSH"],
    correct: 1
  },
  {
    q: "The daily average requirement of iodine is:",
    options: ["10-20 ug", "100-200 ug", "500 ug", "1 mg"],
    correct: 1
  },
  {
    q: "The thyroid concentrates iodide against a gradient via the:",
    options: ["Na+-K+ ATPase", "Na+-I- Symporter (NIS)", "Pendrin", "Hydrogen pump"],
    correct: 1
  },
  {
    q: "Pendrin is located on the:",
    options: ["Basal membrane", "Apical membrane", "Nuclear membrane", "Mitochondrial membrane"],
    correct: 1
  },
  {
    q: "Oxidation of iodide to iodine is catalyzed by:",
    options: ["Deiodinase", "Thyroid Peroxidase (TPO)", "Protease", "Tyrosinase"],
    correct: 1
  },
  {
    q: "Organification involves iodination of which amino acid residues on Thyroglobulin?",
    options: ["Alanine", "Tyrosine", "Phenylalanine", "Histidine"],
    correct: 1
  },
  {
    q: "Coupling of one MIT and one DIT produces:",
    options: ["T4", "T3", "Reverse T3", "Diiodothyronine"],
    correct: 1
  },
  {
    q: "Coupling of two DIT molecules produces:",
    options: ["T3", "T4", "MIT", "rT3"],
    correct: 1
  },
  {
    q: "The ratio of T4 to T3 stored in thyroglobulin is approximately:",
    options: ["1:1", "2:1", "10:1", "50:1"],
    correct: 2
  },
  {
    q: "The thyroid gland stores enough hormone to last for:",
    options: ["1 day", "1 week", "1-3 months", "1 year"],
    correct: 2
  },
  {
    q: "The process of retrieving colloid into the cell is called:",
    options: ["Exocytosis", "Endocytosis", "Diffusion", "Active transport"],
    correct: 1
  },
  {
    q: "MIT and DIT released from thyroglobulin are:",
    options: ["Secreted into blood", "Deiodinated and iodine is recycled", "Excreted in urine", "Oxidized"],
    correct: 1
  },

  // Section 5: Thyroid Transport, Metabolism & Regulation
  {
    q: "What percentage of T4 is bound to plasma proteins?",
    options: ["50%", "90%", "99.95%", "100%"],
    correct: 2
  },
  {
    q: "The major binding protein for T4 is:",
    options: ["Albumin", "Thyroxine-Binding Globulin (TBG)", "Transthyretin", "Prealbumin"],
    correct: 1
  },
  {
    q: "The half-life of T4 is approximately:",
    options: ["1 day", "3 days", "7 days", "30 days"],
    correct: 2
  },
  {
    q: "The half-life of T3 is approximately:",
    options: ["1 day", "7 days", "10 days", "1 hour"],
    correct: 0
  },
  {
    q: "Which hormone is biologically more active?",
    options: ["T4", "T3", "rT3", "DIT"],
    correct: 1
  },
  {
    q: "80% of circulating T3 is derived from:",
    options: ["Direct thyroid secretion", "Peripheral deiodination of T4", "Diet", "Adrenal gland"],
    correct: 1
  },
  {
    q: "The enzyme responsible for converting T4 to T3 is:",
    options: ["5'-deiodinase", "Peroxidase", "Isomerase", "Decarboxylase"],
    correct: 0
  },
  {
    q: "Reverse T3 (rT3) is:",
    options: ["Highly active", "Physiologically inert", "A precursor to T4", "Stored in liver"],
    correct: 1
  },
  {
    q: "Which type of deiodinase is found in the brain and pituitary?",
    options: ["D1", "D2", "D3", "D4"],
    correct: 1
  },
  {
    q: "Thyroid hormone receptors are located:",
    options: ["On the cell membrane", "In the cytoplasm", "In the nucleus", "In mitochondria only"],
    correct: 2
  },
  {
    q: "Thyroid receptors bind to DNA as a heterodimer with:",
    options: ["Glucocorticoid receptor", "Retinoid X Receptor (RXR)", "Insulin receptor", "Estrogen receptor"],
    correct: 1
  },
  {
    q: "Calorigenic action refers to:",
    options: ["Increased heat production and O2 consumption", "Decreased BMR", "Lipogenesis", "Sleep induction"],
    correct: 0
  },
  {
    q: "Thyroid hormones increase BMR by increasing the synthesis of:",
    options: ["Collagen", "Na+-K+ ATPase", "Hemoglobin", "Myoglobin"],
    correct: 1
  },
  {
    q: "What is the effect of thyroid hormone on plasma cholesterol?",
    options: ["Increases it", "Decreases it", "No effect", "Converts it to glucose"],
    correct: 1
  },
  {
    q: "In Hypothyroidism, carotene accumulation leads to:",
    options: ["Night blindness", "Yellow tint of skin (Carotenaemia)", "Scleral icterus", "Dermatitis"],
    correct: 1
  },
  {
    q: "Thyroid hormones effect on the heart includes:",
    options: ["Bradycardia", "Decreased cardiac output", "Tachycardia and increased force of contraction", "Decreased beta-adrenergic receptors"],
    correct: 2
  },
  {
    q: "Thyroid hormones increase the expression of cardiac:",
    options: ["Beta-myosin heavy chain", "Alpha-myosin heavy chain (alpha-MHC)", "Muscarinic receptors", "Sodium-Calcium exchanger"],
    correct: 1
  },
  {
    q: "Pulse pressure in hyperthyroidism is:",
    options: ["Narrowed", "Widened", "Normal", "Absent"],
    correct: 1
  },
  {
    q: "TSH secretion is stimulated by:",
    options: ["T3 and T4", "TRH (Thyrotropin Releasing Hormone)", "Somatostatin", "Dopamine"],
    correct: 1
  },
  {
    q: "TSH secretion is inhibited by:",
    options: ["Low T3/T4", "TRH", "High levels of T3 and T4 (Negative feedback)", "Cold exposure"],
    correct: 2
  },
  {
    q: "The Wolff-Chaikoff effect refers to:",
    options: ["Stimulation of thyroid by iodine", "Inhibition of hormone synthesis by high iodine dose", "Goiter formation due to iodine deficiency", "TSH receptor mutation"],
    correct: 1
  },

  // Section 6: Thyroid Disorders
  {
    q: "The most common cause of hyperthyroidism is:",
    options: ["Toxic adenoma", "Graves disease", "Thyroiditis", "Pituitary tumor"],
    correct: 1
  },
  {
    q: "Graves disease is caused by:",
    options: ["Iodine deficiency", "Thyroid Stimulating Antibodies (TSA/LATS)", "Bacterial infection", "TPO mutation"],
    correct: 1
  },
  {
    q: "A clinical feature unique to Graves disease is:",
    options: ["Weight loss", "Tachycardia", "Exophthalmos", "Tremors"],
    correct: 2
  },
  {
    q: "In Hyperthyroidism, the BMR may increase by:",
    options: ["10%", "20%", "50-100%", "200%"],
    correct: 2
  },
  {
    q: "Myxoedema refers to:",
    options: ["Hyperthyroidism in children", "Adult Hypothyroidism", "Iodine deficiency goiter", "Thyroid cancer"],
    correct: 1
  },
  {
    q: "Non-pitting edema in myxoedema is due to accumulation of:",
    options: ["Fluid in lungs", "Hyaluronic acid and chondroitin sulphate", "Fat", "Blood"],
    correct: 1
  },
  {
    q: "Cretinism is:",
    options: ["Adult hyperthyroidism", "Infantile hypothyroidism", "Calcium deficiency", "Growth hormone deficiency"],
    correct: 1
  },
  {
    q: "A characteristic sign of hypothyroidism in reflexes is:",
    options: ["Hyperreflexia", "Delayed relaxation (Woltman sign)", "Clonus", "Absent reflexes"],
    correct: 1
  },
  {
    q: "Which substance is a Goitrogen?",
    options: ["Iron", "Thiocyanate", "Magnesium", "Vitamin D"],
    correct: 1
  },
  {
    q: "Goitrogens found in cabbage and cauliflower are:",
    options: ["Nitrates", "Isothiocyanates", "Perchlorates", "Sulfonamides"],
    correct: 1
  },
  {
    q: "Which drug inhibits the coupling reaction?",
    options: ["Perchlorate", "Thiourea / Propylthiouracil", "Thiocyanate", "Propranolol"],
    correct: 1
  },
  {
    q: "Perchlorate acts by:",
    options: ["Inhibiting oxidation", "Competitive inhibition of iodide trapping", "Blocking TSH receptors", "Destroying thyroid cells"],
    correct: 1
  },
  {
    q: "In primary hypothyroidism, TSH levels are:",
    options: ["Low", "Normal", "High", "Variable"],
    correct: 2
  },
  {
    q: "In secondary hypothyroidism (Pituitary failure), TSH levels are:",
    options: ["High", "Low", "Normal", "Fluctuating"],
    correct: 1
  },
  {
    q: "Plasma cholesterol in hypothyroidism is:",
    options: ["Low", "Normal", "High", "Absent"],
    correct: 2
  },
  {
    q: "The 'hung up' reflex is seen in:",
    options: ["Hyperthyroidism", "Hypothyroidism", "Cushing's syndrome", "Diabetes"],
    correct: 1
  },
  {
    q: "Fine-needle aspiration biopsy (FNAB) is used to:",
    options: ["Measure T4 levels", "Detect malignancy in nodular goiter", "Treat goiter", "Measure iodine uptake"],
    correct: 1
  },
  {
    q: "Normal value of Radioactive Iodine Uptake (RAIU) at 24 hours is:",
    options: ["5-10%", "20-40%", "60-80%", ">90%"],
    correct: 1
  },
  {
    q: "In Hyperthyroidism, RAIU is:",
    options: ["< 20%", "Normal", "Increased (e.g., 60%)", "Zero"],
    correct: 2
  },
  {
    q: "Euthyroid Sick Syndrome is characterized by:",
    options: ["Elevated T3", "Elevated Reverse T3 (rT3)", "High TSH", "Goiter"],
    correct: 1
  },
  {
    q: "Which feature differentiates Carotenaemia from Jaundice?",
    options: ["Skin color", "Sclera are not yellow in Carotenaemia", "Urine color", "Itching"],
    correct: 1
  },
  {
    q: "Thyroid storm is treated with:",
    options: ["Beta-blockers (Propranolol)", "Thyroxine", "Calcium", "TSH"],
    correct: 0
  },
  {
    q: "In Hashimoto's thyroiditis, antibodies are typically against:",
    options: ["TSH receptor (stimulating)", "Thyroglobulin and Thyroid Peroxidase", "Iodine transporter", "Calcitonin"],
    correct: 1
  },
  {
    q: "Pendred syndrome involves a defect in:",
    options: ["TPO", "Pendrin (Chloride-Iodide transporter)", "Thyroglobulin", "Deiodinase"],
    correct: 1
  },

  // Section 7: Clinical Cases & Miscellaneous
  {
    q: "A 40-year-old female with weight gain, cold intolerance, and non-pitting edema likely has:",
    options: ["Graves disease", "Myxoedema (Hypothyroidism)", "Cushing's syndrome", "Pheochromocytoma"],
    correct: 1
  },
  {
    q: "A 50-year-old woman with weight loss, heat intolerance, and palpitations likely has:",
    options: ["Myxoedema", "Thyrotoxicosis", "Addison's disease", "Diabetes Insipidus"],
    correct: 1
  },
  {
    q: "In a child with stunted growth and mental retardation, the probable diagnosis is:",
    options: ["Pituitary dwarfism", "Cretinism", "Rickets", "Down syndrome"],
    correct: 1
  },
  {
    q: "Water deprivation test is used to diagnose:",
    options: ["Diabetes Mellitus", "Diabetes Insipidus", "SIADH", "Conn's syndrome"],
    correct: 1
  },
  {
    q: "If urine osmolality increases after vasopressin injection during a water deprivation test, the diagnosis is:",
    options: ["Nephrogenic DI", "Cranial (Central) DI", "Primary Polydipsia", "Normal"],
    correct: 1
  },
  {
    q: "A patient with hyponatremia, low plasma osmolality, and high urine osmolality likely has:",
    options: ["Diabetes Insipidus", "Dehydration", "SIADH", "Renal failure"],
    correct: 2
  },
  {
    q: "Bromocriptine reduces GH levels in:",
    options: ["Normal individuals", "Acromegaly patients", "Laron dwarfism", "Pygmies"],
    correct: 1
  },
  {
    q: "The most useful screening test for thyroid dysfunction is:",
    options: ["BMR", "Serum TSH", "PBI", "Cholesterol"],
    correct: 1
  },
  {
    q: "Hot nodules on a thyroid scan indicate:",
    options: ["Non-functioning tissue", "Functioning/Hyperactive tissue", "Cyst", "Malignancy"],
    correct: 1
  },
  {
    q: "Jod-Basedow effect describes:",
    options: ["Iodine-induced hypothyroidism", "Iodine-induced hyperthyroidism", "Autoimmune thyroiditis", "Congenital hypothyroidism"],
    correct: 1
  }
] 