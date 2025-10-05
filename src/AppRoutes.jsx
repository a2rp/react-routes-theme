import { Box, CircularProgress } from '@mui/material';
import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

/** Real pages that already exist */
const Home = lazy(() => import('./pages/home'));
const About = lazy(() => import('./pages/about'));
const NotFound = lazy(() => import('./pages/notFound'));


/** Placeholders (one alias per route, all point to the same file for now) */
/* Core */
const DashboardPage = lazy(() => import('./pages/dashboard'));
const SearchPage = lazy(() => import('./pages/search'));

/* Examples */
const ExamplesOverview = lazy(() => import('./pages/examples'));
const ExampleTable = lazy(() => import('./pages/examples/table'));
const ExampleForm = lazy(() => import('./pages/examples/form'));
const ExampleGallery = lazy(() => import('./pages/examples/gallery'));
const ExamplePrint = lazy(() => import('./pages/examples/print'));
const ExampleConfirmModal = lazy(() => import('./pages/examples/confirm-modal'));
const ExampleTheme = lazy(() => import('./pages/examples/theme'));
const ExampleBreadcrumbs = lazy(() => import('./pages/examples/breadcrumbs'));
const ExampleNavSearch = lazy(() => import('./pages/examples/nav-search'));
const ExampleCounter = lazy(() => import('./pages/examples/counter'));
const ExamplePersistTheme = lazy(() => import('./pages/examples/persist-theme'));
const ExampleDevtoolsTodos = lazy(() => import('./pages/examples/devtools-todos'));
const ExampleSubscribeSelector = lazy(() => import('./pages/examples/subscribe-selector'));
const ExampleUndoRedo = lazy(() => import('./pages/examples/undo-redo'));


/* Customers */
const CustomersList = lazy(() => import('./pages/customers/list'));
const CustomerNew = lazy(() => import('./pages/customers/new'));
const CustomerEdit = lazy(() => import('./pages/customers/edit'));
const CustomerDetail = lazy(() => import('./pages/customers/detail'));
const CustomerPrint = lazy(() => import('./pages/customers/print'));


/* Sales */
const SalesOverview = lazy(() => import('./pages/sales/overview'));
const SalesQuotesList = lazy(() => import('./pages/sales/quotes'));
const SalesQuoteDetail = lazy(() => import('./pages/sales/quotes/detail'));
const SalesReturnsList = lazy(() => import('./pages/sales/returns'));
const SalesReturnDetail = lazy(() => import('./pages/sales/returns/detail'));
const SalesPaymentsList = lazy(() => import('./pages/sales/payments'));
const SalesPaymentDetail = lazy(() => import('./pages/sales/payments/detail'));


/* Orders */
const OrdersList = lazy(() => import('./pages/orders/list'));
const OrderNew = lazy(() => import('./pages/orders/new'));
const OrderDetail = lazy(() => import('./pages/orders/detail'));
const OrderEdit = lazy(() => import('./pages/orders/edit'));
const OrderInvoice = lazy(() => import('./pages/orders/invoice'));
const OrderPrint = lazy(() => import('./pages/orders/print'));
const OrderItems = lazy(() => import('./pages/orders/items'));
const OrderItemDetail = lazy(() => import('./pages/orders/itemDetail'));


/* Products / Catalog */
const ProductsList = lazy(() => import('./pages/products/list'));
const ProductNew = lazy(() => import('./pages/products/new'));
const ProductDetail = lazy(() => import('./pages/products/detail'));
const ProductEdit = lazy(() => import('./pages/products/edit'));
const Brands = lazy(() => import('./pages/products/brands'));
const Attributes = lazy(() => import('./pages/products/attributes'));
const PriceLists = lazy(() => import('./pages/products/price-lists'));
const CategoriesList = lazy(() => import('./pages/categories/list'));


/* Medicines */
const MedicinesList = lazy(() => import('./pages/medicines'));
const MedicineDetail = lazy(() => import('./pages/medicines/detail'));
const Manufacturers = lazy(() => import('./pages/medicines/manufacturers'));
const Molecules = lazy(() => import('./pages/medicines/molecules'));
const Forms = lazy(() => import('./pages/medicines/forms'));
const Strengths = lazy(() => import('./pages/medicines/strengths'));
const ExpiryTracker = lazy(() => import('./pages/medicines/expiry-tracker'));
const HsnGst = lazy(() => import('./pages/medicines/hsn-gst'));

/* Inventory */
const InventoryOverview = lazy(() => import('./pages/inventory/overview'));
const Lots = lazy(() => import('./pages/inventory/lots'));
const Batches = lazy(() => import('./pages/inventory/batches'));
const Adjustments = lazy(() => import('./pages/inventory/adjustments'));
const Transfers = lazy(() => import('./pages/inventory/transfers'));
const Warehouses = lazy(() => import('./pages/inventory/warehouses'));
const Reorder = lazy(() => import('./pages/inventory/reorder'));


/* Vendors / Purchasing */
const VendorsList = lazy(() => import('./pages/vendors/list'));
const VendorNew = lazy(() => import('./pages/vendors/new'));
const VendorDetail = lazy(() => import('./pages/vendors/detail'));
const VendorEdit = lazy(() => import('./pages/vendors/edit'));
const PurchaseOrdersList = lazy(() => import('./pages/purchase-orders/list'));
const PurchaseOrderNew = lazy(() => import('./pages/purchase-orders/new'));
const PurchaseOrderDetail = lazy(() => import('./pages/purchase-orders/detail'));
const PurchaseOrderReceipt = lazy(() => import('./pages/purchase-orders/receipt'));
const PurchaseOrderBill = lazy(() => import('./pages/purchase-orders/bill'));


/* Shipments */
const ShipmentsList = lazy(() => import('./pages/placeholder'));
const ShipmentNew = lazy(() => import('./pages/placeholder'));
const ShipmentDetail = lazy(() => import('./pages/placeholder'));
const ShipmentTrack = lazy(() => import('./pages/placeholder'));
const ShipmentLabels = lazy(() => import('./pages/placeholder'));
const Carriers = lazy(() => import('./pages/placeholder'));

/* Invoices / Receipts / Credit Notes */
const InvoicesList = lazy(() => import('./pages/placeholder'));
const InvoiceNew = lazy(() => import('./pages/placeholder'));
const InvoiceDetail = lazy(() => import('./pages/placeholder'));
const InvoiceEdit = lazy(() => import('./pages/placeholder'));
const InvoicePrint = lazy(() => import('./pages/placeholder'));
const CreditNotesList = lazy(() => import('./pages/placeholder'));
const CreditNoteDetail = lazy(() => import('./pages/placeholder'));
const ReceiptsList = lazy(() => import('./pages/placeholder'));

/* Finance */
const FinanceOverview = lazy(() => import('./pages/placeholder'));
const ChartOfAccounts = lazy(() => import('./pages/placeholder'));
const LedgersList = lazy(() => import('./pages/placeholder'));
const LedgerDetail = lazy(() => import('./pages/placeholder'));
const JournalsList = lazy(() => import('./pages/placeholder'));
const JournalDetail = lazy(() => import('./pages/placeholder'));
const Taxes = lazy(() => import('./pages/placeholder'));
const GstReturns = lazy(() => import('./pages/placeholder'));
const BalanceSheet = lazy(() => import('./pages/placeholder'));
const ProfitLoss = lazy(() => import('./pages/placeholder'));
const TrialBalance = lazy(() => import('./pages/placeholder'));

/* Manufacturing (optional) */
const ManufacturingOverview = lazy(() => import('./pages/placeholder'));
const BomList = lazy(() => import('./pages/placeholder'));
const BomDetail = lazy(() => import('./pages/placeholder'));
const WorkOrdersList = lazy(() => import('./pages/placeholder'));
const WorkOrderDetail = lazy(() => import('./pages/placeholder'));
const Production = lazy(() => import('./pages/placeholder'));

/* Healthcare (optional) */
const PatientsList = lazy(() => import('./pages/placeholder'));
const PatientDetail = lazy(() => import('./pages/placeholder'));
const PatientVisits = lazy(() => import('./pages/placeholder'));
const AppointmentsList = lazy(() => import('./pages/placeholder'));
const AppointmentDetail = lazy(() => import('./pages/placeholder'));
const AppointmentCalendar = lazy(() => import('./pages/placeholder'));
const PrescriptionsList = lazy(() => import('./pages/placeholder'));
const PrescriptionDetail = lazy(() => import('./pages/placeholder'));
const LabsList = lazy(() => import('./pages/placeholder'));
const LabDetail = lazy(() => import('./pages/placeholder'));
const LabCatalog = lazy(() => import('./pages/placeholder'));
const ImagingList = lazy(() => import('./pages/placeholder'));
const ImagingDetail = lazy(() => import('./pages/placeholder'));

/* Reports */
const ReportsOverview = lazy(() => import('./pages/placeholder'));
const ReportSales = lazy(() => import('./pages/placeholder'));
const ReportInventory = lazy(() => import('./pages/placeholder'));
const ReportCustomers = lazy(() => import('./pages/placeholder'));
const ReportFinance = lazy(() => import('./pages/placeholder'));
const ReportProcurement = lazy(() => import('./pages/placeholder'));
const ReportShipment = lazy(() => import('./pages/placeholder'));
const ReportGst = lazy(() => import('./pages/placeholder'));

/* Admin */
const AdminUsers = lazy(() => import('./pages/placeholder'));
const AdminUserDetail = lazy(() => import('./pages/placeholder'));
const AdminRoles = lazy(() => import('./pages/placeholder'));
const AdminPermissions = lazy(() => import('./pages/placeholder'));
const AdminAuditLog = lazy(() => import('./pages/placeholder'));
const AdminActivity = lazy(() => import('./pages/placeholder'));
const AdminSystemStatus = lazy(() => import('./pages/placeholder'));
const AdminFeatureFlags = lazy(() => import('./pages/placeholder'));
const AdminTenants = lazy(() => import('./pages/placeholder'));
const AdminIntegrations = lazy(() => import('./pages/placeholder'));
const AdminEmailTemplates = lazy(() => import('./pages/placeholder'));
const AdminSmsTemplates = lazy(() => import('./pages/placeholder'));

/* Settings */
const SettingsOverview = lazy(() => import('./pages/placeholder'));
const SettingsProfile = lazy(() => import('./pages/placeholder'));
const SettingsAppearance = lazy(() => import('./pages/placeholder'));
const SettingsBilling = lazy(() => import('./pages/placeholder'));
const SettingsBackups = lazy(() => import('./pages/placeholder'));
const SettingsTokens = lazy(() => import('./pages/placeholder'));
const SettingsWarehouses = lazy(() => import('./pages/placeholder'));
const SettingsLocations = lazy(() => import('./pages/placeholder'));
const SettingsTax = lazy(() => import('./pages/placeholder'));
const SettingsUnits = lazy(() => import('./pages/placeholder'));
const SettingsCurrencies = lazy(() => import('./pages/placeholder'));
const SettingsNumbering = lazy(() => import('./pages/placeholder'));
const SettingsPrintTemplates = lazy(() => import('./pages/placeholder'));
const SettingsNotifications = lazy(() => import('./pages/placeholder'));
const SettingsWebhooks = lazy(() => import('./pages/placeholder'));

/* Tools */
const ToolsImportExport = lazy(() => import('./pages/placeholder'));
const ToolsSeed = lazy(() => import('./pages/placeholder'));
const ToolsThemeTokens = lazy(() => import('./pages/placeholder'));
const ToolsPlayground = lazy(() => import('./pages/placeholder'));

/* Auth + Account + Help */
const Login = lazy(() => import('./pages/placeholder'));
const Register = lazy(() => import('./pages/placeholder'));
const Forgot = lazy(() => import('./pages/placeholder'));
const Reset = lazy(() => import('./pages/placeholder'));
const Verify = lazy(() => import('./pages/placeholder'));
const ProfilePage = lazy(() => import('./pages/placeholder'));
const NotificationsPage = lazy(() => import('./pages/placeholder'));
const HelpPage = lazy(() => import('./pages/placeholder'));
const FaqPage = lazy(() => import('./pages/placeholder'));
const ContactPage = lazy(() => import('./pages/placeholder'));
const FeedbackPage = lazy(() => import('./pages/placeholder'));
const ChangelogPage = lazy(() => import('./pages/placeholder'));
const RoadmapPage = lazy(() => import('./pages/placeholder'));

/* Print helpers */
const PrintQuote = lazy(() => import('./pages/placeholder'));
const PrintSticker = lazy(() => import('./pages/placeholder'));
const PrintInvoice = lazy(() => import('./pages/placeholder'));

const AppRoutes = () => (
    <Suspense fallback={
        <Box sx={{ width: 100, height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CircularProgress />
        </Box>
    }>
        <Routes>
            {/* Core */}
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/search" element={<SearchPage />} />

            {/* Examples */}
            <Route path="/examples" element={<ExamplesOverview />} />
            <Route path="/examples/table" element={<ExampleTable />} />
            <Route path="/examples/form" element={<ExampleForm />} />
            <Route path="/examples/gallery" element={<ExampleGallery />} />
            <Route path="/examples/print" element={<ExamplePrint />} />
            <Route path="/examples/confirm-modal" element={<ExampleConfirmModal />} />
            <Route path="/examples/theme" element={<ExampleTheme />} />
            <Route path="/examples/breadcrumbs" element={<ExampleBreadcrumbs />} />
            <Route path="/examples/nav-search" element={<ExampleNavSearch />} />
            <Route path="/examples/counter" element={<ExampleCounter />} />
            <Route path="/examples/persist-theme" element={<ExamplePersistTheme />} />
            <Route path="/examples/devtools-todos" element={<ExampleDevtoolsTodos />} />
            <Route path="/examples/subscribe-selector" element={<ExampleSubscribeSelector />} />
            <Route path="/examples/undo-redo" element={<ExampleUndoRedo />} />

            {/* Customers */}
            <Route path="/customers" element={<CustomersList />} />
            <Route path="/customers/new" element={<CustomerNew />} />
            <Route path="/customers/:customerId" element={<CustomerDetail />} />
            <Route path="/customers/:customerId/edit" element={<CustomerEdit />} />
            <Route path="/customers/:customerId/print" element={<CustomerPrint />} />

            {/* Sales */}
            <Route path="/sales" element={<SalesOverview />} />
            <Route path="/sales/quotes" element={<SalesQuotesList />} />
            <Route path="/sales/quotes/:quoteId" element={<SalesQuoteDetail />} />
            <Route path="/sales/returns" element={<SalesReturnsList />} />
            <Route path="/sales/returns/:returnId" element={<SalesReturnDetail />} />
            <Route path="/sales/payments" element={<SalesPaymentsList />} />
            <Route path="/sales/payments/:paymentId" element={<SalesPaymentDetail />} />

            {/* Orders */}
            <Route path="/orders" element={<OrdersList />} />
            <Route path="/orders/new" element={<OrderNew />} />
            <Route path="/orders/:orderId" element={<OrderDetail />} />
            <Route path="/orders/:orderId/edit" element={<OrderEdit />} />
            <Route path="/orders/:orderId/invoice" element={<OrderInvoice />} />
            <Route path="/orders/:orderId/print" element={<OrderPrint />} />
            <Route path="/orders/:orderId/items" element={<OrderItems />} />
            <Route path="/orders/:orderId/items/:itemId" element={<OrderItemDetail />} />

            {/* Products / Catalog */}
            <Route path="/products" element={<ProductsList />} />
            <Route path="/products/new" element={<ProductNew />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/products/:productId/edit" element={<ProductEdit />} />
            <Route path="/products/brands" element={<Brands />} />
            <Route path="/products/attributes" element={<Attributes />} />
            <Route path="/products/price-lists" element={<PriceLists />} />
            <Route path="/categories" element={<CategoriesList />} />

            {/* Medicines */}
            <Route path="/medicines" element={<MedicinesList />} />
            <Route path="/medicines/:medicineId" element={<MedicineDetail />} />
            <Route path="/medicines/manufacturers" element={<Manufacturers />} />
            <Route path="/medicines/molecules" element={<Molecules />} />
            <Route path="/medicines/forms" element={<Forms />} />
            <Route path="/medicines/strengths" element={<Strengths />} />
            <Route path="/medicines/expiry-tracker" element={<ExpiryTracker />} />
            <Route path="/medicines/hsn-gst" element={<HsnGst />} />

            {/* Inventory */}
            <Route path="/inventory" element={<InventoryOverview />} />
            <Route path="/inventory/lots" element={<Lots />} />
            <Route path="/inventory/batches" element={<Batches />} />
            <Route path="/inventory/adjustments" element={<Adjustments />} />
            <Route path="/inventory/transfers" element={<Transfers />} />
            <Route path="/inventory/warehouses" element={<Warehouses />} />
            <Route path="/inventory/reorder" element={<Reorder />} />

            {/* Vendors / Purchasing */}
            <Route path="/vendors" element={<VendorsList />} />
            <Route path="/vendors/new" element={<VendorNew />} />
            <Route path="/vendors/:vendorId" element={<VendorDetail />} />
            <Route path="/vendors/:vendorId/edit" element={<VendorEdit />} />
            <Route path="/purchase-orders" element={<PurchaseOrdersList />} />
            <Route path="/purchase-orders/new" element={<PurchaseOrderNew />} />
            <Route path="/purchase-orders/:poId" element={<PurchaseOrderDetail />} />
            <Route path="/purchase-orders/:poId/receipt" element={<PurchaseOrderReceipt />} />
            <Route path="/purchase-orders/:poId/bill" element={<PurchaseOrderBill />} />

            {/* Shipments */}
            <Route path="/shipments" element={<ShipmentsList />} />
            <Route path="/shipments/new" element={<ShipmentNew />} />
            <Route path="/shipments/:shipmentId" element={<ShipmentDetail />} />
            <Route path="/shipments/:shipmentId/track" element={<ShipmentTrack />} />
            <Route path="/shipments/:shipmentId/labels" element={<ShipmentLabels />} />
            <Route path="/shipments/carriers" element={<Carriers />} />

            {/* Invoices / Receipts / Credit Notes */}
            <Route path="/invoices" element={<InvoicesList />} />
            <Route path="/invoices/new" element={<InvoiceNew />} />
            <Route path="/invoices/:invoiceId" element={<InvoiceDetail />} />
            <Route path="/invoices/:invoiceId/edit" element={<InvoiceEdit />} />
            <Route path="/invoices/:invoiceId/print" element={<InvoicePrint />} />
            <Route path="/invoices/credit-notes" element={<CreditNotesList />} />
            <Route path="/invoices/credit-notes/:creditId" element={<CreditNoteDetail />} />
            <Route path="/receipts" element={<ReceiptsList />} />

            {/* Finance */}
            <Route path="/finance" element={<FinanceOverview />} />
            <Route path="/finance/chart-of-accounts" element={<ChartOfAccounts />} />
            <Route path="/finance/ledgers" element={<LedgersList />} />
            <Route path="/finance/ledgers/:accountId" element={<LedgerDetail />} />
            <Route path="/finance/journals" element={<JournalsList />} />
            <Route path="/finance/journals/:journalId" element={<JournalDetail />} />
            <Route path="/finance/taxes" element={<Taxes />} />
            <Route path="/finance/gst-returns" element={<GstReturns />} />
            <Route path="/finance/balance-sheet" element={<BalanceSheet />} />
            <Route path="/finance/profit-loss" element={<ProfitLoss />} />
            <Route path="/finance/trial-balance" element={<TrialBalance />} />

            {/* Manufacturing */}
            <Route path="/manufacturing" element={<ManufacturingOverview />} />
            <Route path="/manufacturing/bom" element={<BomList />} />
            <Route path="/manufacturing/bom/:bomId" element={<BomDetail />} />
            <Route path="/manufacturing/work-orders" element={<WorkOrdersList />} />
            <Route path="/manufacturing/work-orders/:woId" element={<WorkOrderDetail />} />
            <Route path="/manufacturing/production" element={<Production />} />

            {/* Healthcare */}
            <Route path="/patients" element={<PatientsList />} />
            <Route path="/patients/:patientId" element={<PatientDetail />} />
            <Route path="/patients/:patientId/visits" element={<PatientVisits />} />
            <Route path="/appointments" element={<AppointmentsList />} />
            <Route path="/appointments/:appointmentId" element={<AppointmentDetail />} />
            <Route path="/appointments/calendar" element={<AppointmentCalendar />} />
            <Route path="/prescriptions" element={<PrescriptionsList />} />
            <Route path="/prescriptions/:rxId" element={<PrescriptionDetail />} />
            <Route path="/labs" element={<LabsList />} />
            <Route path="/labs/:labId" element={<LabDetail />} />
            <Route path="/labs/catalog" element={<LabCatalog />} />
            <Route path="/imaging" element={<ImagingList />} />
            <Route path="/imaging/:imageId" element={<ImagingDetail />} />

            {/* Reports */}
            <Route path="/reports" element={<ReportsOverview />} />
            <Route path="/reports/sales" element={<ReportSales />} />
            <Route path="/reports/inventory" element={<ReportInventory />} />
            <Route path="/reports/customers" element={<ReportCustomers />} />
            <Route path="/reports/finance" element={<ReportFinance />} />
            <Route path="/reports/procurement" element={<ReportProcurement />} />
            <Route path="/reports/shipment" element={<ReportShipment />} />
            <Route path="/reports/gst" element={<ReportGst />} />

            {/* Admin */}
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/users/:userId" element={<AdminUserDetail />} />
            <Route path="/admin/roles" element={<AdminRoles />} />
            <Route path="/admin/permissions" element={<AdminPermissions />} />
            <Route path="/admin/audit-log" element={<AdminAuditLog />} />
            <Route path="/admin/activity" element={<AdminActivity />} />
            <Route path="/admin/system-status" element={<AdminSystemStatus />} />
            <Route path="/admin/feature-flags" element={<AdminFeatureFlags />} />
            <Route path="/admin/tenants" element={<AdminTenants />} />
            <Route path="/admin/integrations" element={<AdminIntegrations />} />
            <Route path="/admin/email-templates" element={<AdminEmailTemplates />} />
            <Route path="/admin/sms-templates" element={<AdminSmsTemplates />} />

            {/* Settings */}
            <Route path="/settings" element={<SettingsOverview />} />
            <Route path="/settings/profile" element={<SettingsProfile />} />
            <Route path="/settings/appearance" element={<SettingsAppearance />} />
            <Route path="/settings/billing" element={<SettingsBilling />} />
            <Route path="/settings/backups" element={<SettingsBackups />} />
            <Route path="/settings/tokens" element={<SettingsTokens />} />
            <Route path="/settings/warehouses" element={<SettingsWarehouses />} />
            <Route path="/settings/locations" element={<SettingsLocations />} />
            <Route path="/settings/tax" element={<SettingsTax />} />
            <Route path="/settings/units" element={<SettingsUnits />} />
            <Route path="/settings/currencies" element={<SettingsCurrencies />} />
            <Route path="/settings/numbering" element={<SettingsNumbering />} />
            <Route path="/settings/print-templates" element={<SettingsPrintTemplates />} />
            <Route path="/settings/notifications" element={<SettingsNotifications />} />
            <Route path="/settings/webhooks" element={<SettingsWebhooks />} />

            {/* Tools */}
            <Route path="/tools/import-export" element={<ToolsImportExport />} />
            <Route path="/tools/seed" element={<ToolsSeed />} />
            <Route path="/tools/theme-tokens" element={<ToolsThemeTokens />} />
            <Route path="/tools/playground" element={<ToolsPlayground />} />

            {/* Auth + Account + Help */}
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth/forgot" element={<Forgot />} />
            <Route path="/auth/reset" element={<Reset />} />
            <Route path="/auth/verify" element={<Verify />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route path="/changelog" element={<ChangelogPage />} />
            <Route path="/roadmap" element={<RoadmapPage />} />

            {/* Print helpers */}
            <Route path="/print/quote/:id" element={<PrintQuote />} />
            <Route path="/print/sticker/:id" element={<PrintSticker />} />
            <Route path="/print/invoice/:invoiceId" element={<PrintInvoice />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Suspense>
);

export default AppRoutes;
