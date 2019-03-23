import { css } from 'lit-element'

const styles = css`
@charset "UTF-8";
@font-face {
  font-family: SAP-icons;
  src: url(SAP-icons.woff) format("woff");
  font-weight: 400;
  font-style: normal
}
[class*=sap-icon]::before {
  font-family: SAP-icons;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  display: inline-block;
  text-decoration: inherit;
  text-transform: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  speak: none
}
.sap-icon--s::before,
.sap-icon--small::before {
  font-size: .85714rem;
  line-height: 1
}
.sap-icon--m::before,
.sap-icon--medium::before {
  font-size: 1.14286rem;
  line-height: 1
}
.sap-icon--l::before,
.sap-icon--large::before {
  font-size: 1.42857rem;
  line-height: 1
}
.sap-icon--xl::before,
.sap-icon--xlarge::before {
  font-size: 1.71429rem;
  line-height: 1
}
.sap-icon--accidental-leave::before {
  content: ""
}
.sap-icon--account::before {
  content: ""
}
.sap-icon--wrench::before {
  content: ""
}
.sap-icon--windows-doors::before {
  content: ""
}
.sap-icon--washing-machine::before {
  content: ""
}
.sap-icon--visits::before {
  content: ""
}
.sap-icon--video::before {
  content: ""
}
.sap-icon--travel-expense::before {
  content: ""
}
.sap-icon--temperature::before {
  content: ""
}
.sap-icon--task::before {
  content: ""
}
.sap-icon--synchronize::before {
  content: ""
}
.sap-icon--survey::before {
  content: ""
}
.sap-icon--settings::before {
  content: ""
}
.sap-icon--search::before {
  content: ""
}
.sap-icon--sales-document::before {
  content: ""
}
.sap-icon--retail-store::before {
  content: ""
}
.sap-icon--refresh::before {
  content: ""
}
.sap-icon--product::before {
  content: ""
}
.sap-icon--present::before {
  content: ""
}
.sap-icon--ppt-attachment::before {
  content: ""
}
.sap-icon--pool::before {
  content: ""
}
.sap-icon--pie-chart::before {
  content: ""
}
.sap-icon--picture::before {
  content: ""
}
.sap-icon--photo-voltaic::before {
  content: ""
}
.sap-icon--phone::before {
  content: ""
}
.sap-icon--pending::before {
  content: ""
}
.sap-icon--pdf-attachment::before {
  content: ""
}
.sap-icon--past::before {
  content: ""
}
.sap-icon--outgoing-call::before {
  content: ""
}
.sap-icon--opportunity::before {
  content: ""
}
.sap-icon--opportunities::before {
  content: ""
}
.sap-icon--notes::before {
  content: ""
}
.sap-icon--money-bills::before {
  content: ""
}
.sap-icon--map::before {
  content: ""
}
.sap-icon--log::before {
  content: ""
}
.sap-icon--line-charts::before {
  content: ""
}
.sap-icon--lightbulb::before {
  content: ""
}
.sap-icon--leads::before {
  content: ""
}
.sap-icon--lead::before {
  content: ""
}
.sap-icon--laptop::before {
  content: ""
}
.sap-icon--kpi-managing-my-area::before {
  content: ""
}
.sap-icon--kpi-corporate-performance::before {
  content: ""
}
.sap-icon--incoming-call::before {
  content: ""
}
.sap-icon--inbox::before {
  content: ""
}
.sap-icon--horizontal-bar-chart::before {
  content: ""
}
.sap-icon--history::before {
  content: ""
}
.sap-icon--heating-cooling::before {
  content: ""
}
.sap-icon--gantt-bars::before {
  content: ""
}
.sap-icon--future::before {
  content: ""
}
.sap-icon--fridge::before {
  content: ""
}
.sap-icon--fallback::before {
  content: ""
}
.sap-icon--expense-report::before {
  content: ""
}
.sap-icon--excel-attachment::before {
  content: ""
}
.sap-icon--energy-saving-lightbulb::before {
  content: ""
}
.sap-icon--employee::before {
  content: ""
}
.sap-icon--email::before {
  content: ""
}
.sap-icon--edit::before {
  content: ""
}
.sap-icon--duplicate::before {
  content: ""
}
.sap-icon--download::before {
  content: ""
}
.sap-icon--doc-attachment::before {
  content: ""
}
.sap-icon--dishwasher::before {
  content: ""
}
.sap-icon--delete::before {
  content: ""
}
.sap-icon--decline::before {
  content: ""
}
.sap-icon--complete::before {
  content: ""
}
.sap-icon--competitor::before {
  content: ""
}
.sap-icon--collections-management::before {
  content: ""
}
.sap-icon--chalkboard::before {
  content: ""
}
.sap-icon--cart::before {
  content: ""
}
.sap-icon--card::before {
  content: ""
}
.sap-icon--camera::before {
  content: ""
}
.sap-icon--calendar::before {
  content: ""
}
.sap-icon--begin::before {
  content: ""
}
.sap-icon--basket::before {
  content: ""
}
.sap-icon--bar-chart::before {
  content: ""
}
.sap-icon--attachment::before {
  content: ""
}
.sap-icon--arrow-top::before {
  content: ""
}
.sap-icon--arrow-right::before {
  content: ""
}
.sap-icon--arrow-left::before {
  content: ""
}
.sap-icon--arrow-bottom::before {
  content: ""
}
.sap-icon--approvals::before {
  content: ""
}
.sap-icon--appointment::before {
  content: ""
}
.sap-icon--alphabetical-order::before {
  content: ""
}
.sap-icon--along-stacked-chart::before {
  content: ""
}
.sap-icon--alert::before {
  content: ""
}
.sap-icon--addresses::before {
  content: ""
}
.sap-icon--address-book::before {
  content: ""
}
.sap-icon--add-filter::before {
  content: ""
}
.sap-icon--add-favorite::before {
  content: ""
}
.sap-icon--add::before {
  content: ""
}
.sap-icon--activities::before {
  content: ""
}
.sap-icon--action::before {
  content: ""
}
.sap-icon--accept::before {
  content: ""
}
.sap-icon--hint::before {
  content: ""
}
.sap-icon--group::before {
  content: ""
}
.sap-icon--check-availability::before {
  content: ""
}
.sap-icon--weather-proofing::before {
  content: ""
}
.sap-icon--payment-approval::before {
  content: ""
}
.sap-icon--batch-payments::before {
  content: ""
}
.sap-icon--bed::before {
  content: ""
}
.sap-icon--arobase::before {
  content: ""
}
.sap-icon--family-care::before {
  content: ""
}
.sap-icon--favorite::before {
  content: ""
}
.sap-icon--navigation-right-arrow::before {
  content: ""
}
.sap-icon--navigation-left-arrow::before {
  content: ""
}
.sap-icon--e-care::before {
  content: ""
}
.sap-icon--less::before {
  content: ""
}
.sap-icon--lateness::before {
  content: ""
}
.sap-icon--lab::before {
  content: ""
}
.sap-icon--internet-browser::before {
  content: ""
}
.sap-icon--instance::before {
  content: ""
}
.sap-icon--inspection::before {
  content: ""
}
.sap-icon--image-viewer::before {
  content: ""
}
.sap-icon--home::before {
  content: ""
}
.sap-icon--grid::before {
  content: ""
}
.sap-icon--goalseek::before {
  content: ""
}
.sap-icon--general-leave-request::before {
  content: ""
}
.sap-icon--create-leave-request::before {
  content: ""
}
.sap-icon--flight::before {
  content: ""
}
.sap-icon--filter::before {
  content: ""
}
.sap-icon--favorite-list::before {
  content: ""
}
.sap-icon--factory::before {
  content: ""
}
.sap-icon--endoscopy::before {
  content: ""
}
.sap-icon--employee-pane::before {
  content: ""
}
.sap-icon--employee-approvals::before {
  content: ""
}
.sap-icon--email-read::before {
  content: ""
}
.sap-icon--electrocardiogram::before {
  content: ""
}
.sap-icon--documents::before {
  content: ""
}
.sap-icon--decision::before {
  content: ""
}
.sap-icon--database::before {
  content: ""
}
.sap-icon--customer-history::before {
  content: ""
}
.sap-icon--customer::before {
  content: ""
}
.sap-icon--credit-card::before {
  content: ""
}
.sap-icon--create-entry-time::before {
  content: ""
}
.sap-icon--contacts::before {
  content: ""
}
.sap-icon--compare::before {
  content: ""
}
.sap-icon--clinical-order::before {
  content: ""
}
.sap-icon--chain-link::before {
  content: ""
}
.sap-icon--pull-down::before {
  content: ""
}
.sap-icon--cargo-train::before {
  content: ""
}
.sap-icon--car-rental::before {
  content: ""
}
.sap-icon--business-card::before {
  content: ""
}
.sap-icon--bar-code::before {
  content: ""
}
.sap-icon--folder-blank::before {
  content: ""
}
.sap-icon--passenger-train::before {
  content: ""
}
.sap-icon--question-mark::before {
  content: ""
}
.sap-icon--world::before {
  content: ""
}
.sap-icon--iphone::before {
  content: ""
}
.sap-icon--ipad::before {
  content: ""
}
.sap-icon--warning::before {
  content: ""
}
.sap-icon--sort::before {
  content: ""
}
.sap-icon--course-book::before {
  content: ""
}
.sap-icon--course-program::before {
  content: ""
}
.sap-icon--add-coursebook::before {
  content: ""
}
.sap-icon--print::before {
  content: ""
}
.sap-icon--save::before {
  content: ""
}
.sap-icon--play::before {
  content: ""
}
.sap-icon--pause::before {
  content: ""
}
.sap-icon--record::before {
  content: ""
}
.sap-icon--response::before {
  content: ""
}
.sap-icon--pushpin-on::before {
  content: ""
}
.sap-icon--pushpin-off::before {
  content: ""
}
.sap-icon--unfavorite::before {
  content: ""
}
.sap-icon--learning-assistant::before {
  content: ""
}
.sap-icon--timesheet::before {
  content: ""
}
.sap-icon--time-entry-request::before {
  content: ""
}
.sap-icon--list::before {
  content: ""
}
.sap-icon--action-settings::before {
  content: ""
}
.sap-icon--share::before {
  content: ""
}
.sap-icon--feed::before {
  content: ""
}
.sap-icon--role::before {
  content: ""
}
.sap-icon--flag::before {
  content: ""
}
.sap-icon--post::before {
  content: ""
}
.sap-icon--inspect::before {
  content: ""
}
.sap-icon--inspect-down::before {
  content: ""
}
.sap-icon--appointment-2::before {
  content: ""
}
.sap-icon--target-group::before {
  content: ""
}
.sap-icon--marketing-campaign::before {
  content: ""
}
.sap-icon--message-error::before {
  content: ""
}
.sap-icon--comment::before {
  content: ""
}
.sap-icon--shipping-status::before {
  content: ""
}
.sap-icon--collaborate::before {
  content: ""
}
.sap-icon--shortcut::before {
  content: ""
}
.sap-icon--lead-outdated::before {
  content: ""
}
.sap-icon--tools-opportunity::before {
  content: ""
}
.sap-icon--permission::before {
  content: ""
}
.sap-icon--supplier::before {
  content: ""
}
.sap-icon--table-view::before {
  content: ""
}
.sap-icon--table-chart::before {
  content: ""
}
.sap-icon--switch-views::before {
  content: ""
}
.sap-icon--e-learning::before {
  content: ""
}
.sap-icon--manager::before {
  content: ""
}
.sap-icon--switch-classes::before {
  content: ""
}
.sap-icon--simple-payment::before {
  content: ""
}
.sap-icon--signature::before {
  content: ""
}
.sap-icon--sales-order-item::before {
  content: ""
}
.sap-icon--sales-order::before {
  content: ""
}
.sap-icon--request::before {
  content: ""
}
.sap-icon--receipt::before {
  content: ""
}
.sap-icon--puzzle::before {
  content: ""
}
.sap-icon--process::before {
  content: ""
}
.sap-icon--private::before {
  content: ""
}
.sap-icon--popup-window::before {
  content: ""
}
.sap-icon--person-placeholder::before {
  content: ""
}
.sap-icon--per-diem::before {
  content: ""
}
.sap-icon--paper-plane::before {
  content: ""
}
.sap-icon--paid-leave::before {
  content: ""
}
.sap-icon--pdf-reader::before {
  content: ""
}
.sap-icon--overview-chart::before {
  content: ""
}
.sap-icon--overlay::before {
  content: ""
}
.sap-icon--org-chart::before {
  content: ""
}
.sap-icon--number-sign::before {
  content: ""
}
.sap-icon--notification-2::before {
  content: ""
}
.sap-icon--my-sales-order::before {
  content: ""
}
.sap-icon--meal::before {
  content: ""
}
.sap-icon--loan::before {
  content: ""
}
.sap-icon--order-status::before {
  content: ""
}
.sap-icon--customer-order-entry::before {
  content: ""
}
.sap-icon--performance::before {
  content: ""
}
.sap-icon--menu::before {
  content: ""
}
.sap-icon--employee-lookup::before {
  content: ""
}
.sap-icon--education::before {
  content: ""
}
.sap-icon--customer-briefing::before {
  content: ""
}
.sap-icon--customer-and-contacts::before {
  content: ""
}
.sap-icon--my-view::before {
  content: ""
}
.sap-icon--accelerated::before {
  content: ""
}
.sap-icon--to-be-reviewed::before {
  content: ""
}
.sap-icon--warning2::before {
  content: ""
}
.sap-icon--feeder-arrow::before {
  content: ""
}
.sap-icon--quality-issue::before {
  content: ""
}
.sap-icon--workflow-tasks::before {
  content: ""
}
.sap-icon--create::before {
  content: ""
}
.sap-icon--home-share::before {
  content: ""
}
.sap-icon--globe::before {
  content: ""
}
.sap-icon--tags::before {
  content: ""
}
.sap-icon--work-history::before {
  content: ""
}
.sap-icon--x-ray::before {
  content: ""
}
.sap-icon--wounds-doc::before {
  content: ""
}
.sap-icon--web-cam::before {
  content: ""
}
.sap-icon--waiver::before {
  content: ""
}
.sap-icon--vertical-bar-chart::before {
  content: ""
}
.sap-icon--upstacked-chart::before {
  content: ""
}
.sap-icon--trip-report::before {
  content: ""
}
.sap-icon--microphone::before {
  content: ""
}
.sap-icon--unpaid-leave::before {
  content: ""
}
.sap-icon--tree::before {
  content: ""
}
.sap-icon--toaster-up::before {
  content: ""
}
.sap-icon--toaster-top::before {
  content: ""
}
.sap-icon--toaster-down::before {
  content: ""
}
.sap-icon--time-account::before {
  content: ""
}
.sap-icon--theater::before {
  content: ""
}
.sap-icon--taxi::before {
  content: ""
}
.sap-icon--subway-train::before {
  content: ""
}
.sap-icon--study-leave::before {
  content: ""
}
.sap-icon--stethoscope::before {
  content: ""
}
.sap-icon--step::before {
  content: ""
}
.sap-icon--sonography::before {
  content: ""
}
.sap-icon--soccor::before {
  content: ""
}
.sap-icon--physical-activity::before {
  content: ""
}
.sap-icon--pharmacy::before {
  content: ""
}
.sap-icon--official-service::before {
  content: ""
}
.sap-icon--offsite-work::before {
  content: ""
}
.sap-icon--nutrition-activity::before {
  content: ""
}
.sap-icon--newspaper::before {
  content: ""
}
.sap-icon--monitor-payments::before {
  content: ""
}
.sap-icon--map-2::before {
  content: ""
}
.sap-icon--machine::before {
  content: ""
}
.sap-icon--mri-scan::before {
  content: ""
}
.sap-icon--end-user-experience-monitoring::before {
  content: ""
}
.sap-icon--unwired::before {
  content: ""
}
.sap-icon--customer-financial-fact-sheet::before {
  content: ""
}
.sap-icon--retail-store-manager::before {
  content: ""
}
.sap-icon--Netweaver-business-client::before {
  content: ""
}
.sap-icon--electronic-medical-record::before {
  content: ""
}
.sap-icon--eam-work-order::before {
  content: ""
}
.sap-icon--customer-view::before {
  content: ""
}
.sap-icon--crm-service-manager::before {
  content: ""
}
.sap-icon--crm-sales::before {
  content: ""
}
.sap-icon--widgets::before {
  content: ""
}
.sap-icon--commission-check::before {
  content: ""
}
.sap-icon--collections-insight::before {
  content: ""
}
.sap-icon--clinical-tast-tracker::before {
  content: ""
}
.sap-icon--citizen-connect::before {
  content: ""
}
.sap-icon--cart-approval::before {
  content: ""
}
.sap-icon--capital-projects::before {
  content: ""
}
.sap-icon--bo-strategy-management::before {
  content: ""
}
.sap-icon--business-objects-mobile::before {
  content: ""
}
.sap-icon--business-objects-explorer::before {
  content: ""
}
.sap-icon--business-objects-experience::before {
  content: ""
}
.sap-icon--bbyd-dashboard::before {
  content: ""
}
.sap-icon--bbyd-active-sales::before {
  content: ""
}
.sap-icon--business-by-design::before {
  content: ""
}
.sap-icon--business-one::before {
  content: ""
}
.sap-icon--sap-box::before {
  content: ""
}
.sap-icon--manager-insight::before {
  content: ""
}
.sap-icon--accounting-document-verification::before {
  content: ""
}
.sap-icon--hr-approval::before {
  content: ""
}
.sap-icon--idea-wall::before {
  content: ""
}
.sap-icon--Chart-Tree-Map::before {
  content: ""
}
.sap-icon--cart-5::before {
  content: ""
}
.sap-icon--cart-4::before {
  content: ""
}
.sap-icon--wallet::before {
  content: ""
}
.sap-icon--vehicle-repair::before {
  content: ""
}
.sap-icon--upload::before {
  content: ""
}
.sap-icon--unlocked::before {
  content: ""
}
.sap-icon--umbrella::before {
  content: ""
}
.sap-icon--travel-request::before {
  content: ""
}
.sap-icon--travel-expense-report::before {
  content: ""
}
.sap-icon--travel-itinerary::before {
  content: ""
}
.sap-icon--time-overtime::before {
  content: ""
}
.sap-icon--thing-type::before {
  content: ""
}
.sap-icon--technical-object::before {
  content: ""
}
.sap-icon--tag::before {
  content: ""
}
.sap-icon--syringe::before {
  content: ""
}
.sap-icon--syntax::before {
  content: ""
}
.sap-icon--suitcase::before {
  content: ""
}
.sap-icon--simulate::before {
  content: ""
}
.sap-icon--shield::before {
  content: ""
}
.sap-icon--share-2::before {
  content: ""
}
.sap-icon--sales-quote::before {
  content: ""
}
.sap-icon--repost::before {
  content: ""
}
.sap-icon--provision::before {
  content: ""
}
.sap-icon--projector::before {
  content: ""
}
.sap-icon--add-product::before {
  content: ""
}
.sap-icon--pipeline-analysis::before {
  content: ""
}
.sap-icon--add-photo::before {
  content: ""
}
.sap-icon--palette::before {
  content: ""
}
.sap-icon--nurse::before {
  content: ""
}
.sap-icon--sales-notification::before {
  content: ""
}
.sap-icon--mileage::before {
  content: ""
}
.sap-icon--meeting-room::before {
  content: ""
}
.sap-icon--media-forward::before {
  content: ""
}
.sap-icon--media-play::before {
  content: ""
}
.sap-icon--media-pause::before {
  content: ""
}
.sap-icon--media-reverse::before {
  content: ""
}
.sap-icon--media-rewind::before {
  content: ""
}
.sap-icon--measurement-document::before {
  content: ""
}
.sap-icon--measuring-point::before {
  content: ""
}
.sap-icon--measure::before {
  content: ""
}
.sap-icon--map-3::before {
  content: ""
}
.sap-icon--locked::before {
  content: ""
}
.sap-icon--letter::before {
  content: ""
}
.sap-icon--journey-arrive::before {
  content: ""
}
.sap-icon--journey-change::before {
  content: ""
}
.sap-icon--journey-depart::before {
  content: ""
}
.sap-icon--it-system::before {
  content: ""
}
.sap-icon--it-instance::before {
  content: ""
}
.sap-icon--it-host::before {
  content: ""
}
.sap-icon--iphone-2::before {
  content: ""
}
.sap-icon--ipad-2::before {
  content: ""
}
.sap-icon--inventory::before {
  content: ""
}
.sap-icon--insurance-house::before {
  content: ""
}
.sap-icon--insurance-life::before {
  content: ""
}
.sap-icon--insurance-car::before {
  content: ""
}
.sap-icon--initiative::before {
  content: ""
}
.sap-icon--incident::before {
  content: ""
}
.sap-icon--group-2::before {
  content: ""
}
.sap-icon--goal::before {
  content: ""
}
.sap-icon--functional-location::before {
  content: ""
}
.sap-icon--full-screen::before {
  content: ""
}
.sap-icon--form::before {
  content: ""
}
.sap-icon--fob-watch::before {
  content: ""
}
.sap-icon--blank-tag::before {
  content: ""
}
.sap-icon--family-protection::before {
  content: ""
}
.sap-icon--folder::before {
  content: ""
}
.sap-icon--fax-machine::before {
  content: ""
}
.sap-icon--example::before {
  content: ""
}
.sap-icon--eraser::before {
  content: ""
}
.sap-icon--employee-rejections::before {
  content: ""
}
.sap-icon--drop-down-list::before {
  content: ""
}
.sap-icon--draw-rectangle::before {
  content: ""
}
.sap-icon--document::before {
  content: ""
}
.sap-icon--doctor::before {
  content: ""
}
.sap-icon--discussion-2::before {
  content: ""
}
.sap-icon--discussion::before {
  content: ""
}
.sap-icon--dimension::before {
  content: ""
}
.sap-icon--customer-and-supplier::before {
  content: ""
}
.sap-icon--crop::before {
  content: ""
}
.sap-icon--add-contact::before {
  content: ""
}
.sap-icon--compare-2::before {
  content: ""
}
.sap-icon--color-fill::before {
  content: ""
}
.sap-icon--collision::before {
  content: ""
}
.sap-icon--curriculum::before {
  content: ""
}
.sap-icon--chart-axis::before {
  content: ""
}
.sap-icon--full-stacked-chart::before {
  content: ""
}
.sap-icon--full-stacked-column-chart::before {
  content: ""
}
.sap-icon--vertical-bar-chart-2::before {
  content: ""
}
.sap-icon--horizontal-bar-chart-2::before {
  content: ""
}
.sap-icon--horizontal-stacked-chart::before {
  content: ""
}
.sap-icon--vertical-stacked-chart::before {
  content: ""
}
.sap-icon--choropleth-chart::before {
  content: ""
}
.sap-icon--geographic-bubble-chart::before {
  content: ""
}
.sap-icon--multiple-radar-chart::before {
  content: ""
}
.sap-icon--radar-chart::before {
  content: ""
}
.sap-icon--crossed-line-chart::before {
  content: ""
}
.sap-icon--multiple-line-chart::before {
  content: ""
}
.sap-icon--multiple-bar-chart::before {
  content: ""
}
.sap-icon--line-chart::before {
  content: ""
}
.sap-icon--line-chart-dual-axis::before {
  content: ""
}
.sap-icon--bubble-chart::before {
  content: ""
}
.sap-icon--scatter-chart::before {
  content: ""
}
.sap-icon--multiple-pie-chart::before {
  content: ""
}
.sap-icon--column-chart-dual-axis::before {
  content: ""
}
.sap-icon--tag-cloud-chart::before {
  content: ""
}
.sap-icon--area-chart::before {
  content: ""
}
.sap-icon--cause::before {
  content: ""
}
.sap-icon--cart-3::before {
  content: ""
}
.sap-icon--cart-2::before {
  content: ""
}
.sap-icon--bus-public-transport::before {
  content: ""
}
.sap-icon--burglary::before {
  content: ""
}
.sap-icon--building::before {
  content: ""
}
.sap-icon--border::before {
  content: ""
}
.sap-icon--bookmark::before {
  content: ""
}
.sap-icon--badge::before {
  content: ""
}
.sap-icon--attachment-audio::before {
  content: ""
}
.sap-icon--attachment-video::before {
  content: ""
}
.sap-icon--attachment-html::before {
  content: ""
}
.sap-icon--attachment-photo::before {
  content: ""
}
.sap-icon--attachment-e-pub::before {
  content: ""
}
.sap-icon--attachment-zip-file::before {
  content: ""
}
.sap-icon--attachment-text-file::before {
  content: ""
}
.sap-icon--add-equipment::before {
  content: ""
}
.sap-icon--add-activity::before {
  content: ""
}
.sap-icon--activity-individual::before {
  content: ""
}
.sap-icon--activity-2::before {
  content: ""
}
.sap-icon--add-activity-2::before {
  content: ""
}
.sap-icon--activity-items::before {
  content: ""
}
.sap-icon--activity-assigned-to-goal::before {
  content: ""
}
.sap-icon--status-positive::before {
  content: ""
}
.sap-icon--status-negative::before {
  content: ""
}
.sap-icon--status-inactive::before {
  content: ""
}
.sap-icon--status-critical::before {
  content: ""
}
.sap-icon--blank-tag-2::before {
  content: ""
}
.sap-icon--cart-full::before {
  content: ""
}
.sap-icon--locate-me::before {
  content: ""
}
.sap-icon--paging::before {
  content: ""
}
.sap-icon--company-view::before {
  content: ""
}
.sap-icon--document-text::before {
  content: ""
}
.sap-icon--explorer::before {
  content: ""
}
.sap-icon--personnel-view::before {
  content: ""
}
.sap-icon--sorting-ranking::before {
  content: ""
}
.sap-icon--drill-down::before {
  content: ""
}
.sap-icon--drill-up::before {
  content: ""
}
.sap-icon--vds-file::before {
  content: ""
}
.sap-icon--sap-logo-shape::before {
  content: ""
}
.sap-icon--folder-full::before {
  content: ""
}
.sap-icon--system-exit::before {
  content: ""
}
.sap-icon--system-exit-2::before {
  content: ""
}
.sap-icon--close-command-field::before {
  content: ""
}
.sap-icon--open-command-field::before {
  content: ""
}
.sap-icon--sys-enter-2::before {
  content: ""
}
.sap-icon--sys-enter::before {
  content: ""
}
.sap-icon--sys-help-2::before {
  content: ""
}
.sap-icon--sys-help::before {
  content: ""
}
.sap-icon--sys-back::before {
  content: ""
}
.sap-icon--sys-back-2::before {
  content: ""
}
.sap-icon--sys-cancel::before {
  content: ""
}
.sap-icon--sys-cancel-2::before {
  content: ""
}
.sap-icon--open-folder::before {
  content: ""
}
.sap-icon--sys-find-next::before {
  content: ""
}
.sap-icon--sys-find::before {
  content: ""
}
.sap-icon--sys-monitor::before {
  content: ""
}
.sap-icon--sys-prev-page::before {
  content: ""
}
.sap-icon--sys-first-page::before {
  content: ""
}
.sap-icon--sys-next-page::before {
  content: ""
}
.sap-icon--sys-last-page::before {
  content: ""
}
.sap-icon--generate-shortcut::before {
  content: ""
}
.sap-icon--create-session::before {
  content: ""
}
.sap-icon--display-more::before {
  content: ""
}
.sap-icon--enter-more::before {
  content: ""
}
.sap-icon--zoom-in::before {
  content: ""
}
.sap-icon--zoom-out::before {
  content: ""
}
.sap-icon--header::before {
  content: ""
}
.sap-icon--detail-view::before {
  content: ""
}
.sap-icon--collapse::before {
  content: ""
}
.sap-icon--expand::before {
  content: ""
}
.sap-icon--positive::before {
  content: ""
}
.sap-icon--negative::before {
  content: ""
}
.sap-icon--display::before {
  content: ""
}
.sap-icon--menu2::before {
  content: ""
}
.sap-icon--redo::before {
  content: ""
}
.sap-icon--undo::before {
  content: ""
}
.sap-icon--navigation-up-arrow::before {
  content: ""
}
.sap-icon--navigation-down-arrow::before {
  content: ""
}
.sap-icon--down::before {
  content: ""
}
.sap-icon--up::before {
  content: ""
}
.sap-icon--shelf::before {
  content: ""
}
.sap-icon--background::before {
  content: ""
}
.sap-icon--resize::before {
  content: ""
}
.sap-icon--move::before {
  content: ""
}
.sap-icon--show::before {
  content: ""
}
.sap-icon--hide::before {
  content: ""
}
.sap-icon--nav-back::before {
  content: ""
}
.sap-icon--error::before {
  content: ""
}
.sap-icon--slim-arrow-right::before {
  content: ""
}
.sap-icon--slim-arrow-left::before {
  content: ""
}
.sap-icon--slim-arrow-down::before {
  content: ""
}
.sap-icon--slim-arrow-up::before {
  content: ""
}
.sap-icon--forward::before {
  content: ""
}
.sap-icon--overflow::before {
  content: ""
}
.sap-icon--value-help::before {
  content: ""
}
.sap-icon--multiselect::before {
  content: ""
}
.sap-icon--exitfullscreen::before {
  content: ""
}
.sap-icon--sys-add::before {
  content: ""
}
.sap-icon--sys-minus::before {
  content: ""
}
.sap-icon--dropdown::before {
  content: ""
}
.sap-icon--expand-group::before {
  content: ""
}
.sap-icon--vertical-grip::before {
  content: ""
}
.sap-icon--horizontal-grip::before {
  content: ""
}
.sap-icon--sort-descending::before {
  content: ""
}
.sap-icon--sort-ascending::before {
  content: ""
}
.sap-icon--arrow-down::before {
  content: ""
}
.sap-icon--legend::before {
  content: ""
}
.sap-icon--collapse-group::before {
  content: ""
}
.sap-icon--message-warning::before {
  content: ""
}
.sap-icon--message-information::before {
  content: ""
}
.sap-icon--message-success::before {
  content: ""
}
.sap-icon--restart::before {
  content: ""
}
.sap-icon--stop::before {
  content: ""
}
.sap-icon--add-process::before {
  content: ""
}
.sap-icon--cancel-maintenance::before {
  content: ""
}
.sap-icon--activate::before {
  content: ""
}
.sap-icon--resize-horizontal::before {
  content: ""
}
.sap-icon--resize-vertical::before {
  content: ""
}
.sap-icon--connected::before {
  content: ""
}
.sap-icon--disconnected::before {
  content: ""
}
.sap-icon--edit-outside::before {
  content: ""
}
.sap-icon--key::before {
  content: ""
}
.sap-icon--minimize::before {
  content: ""
}
.sap-icon--back-to-top::before {
  content: ""
}
.sap-icon--hello-world::before {
  content: ""
}
.sap-icon--outbox::before {
  content: ""
}
.sap-icon--donut-chart::before {
  content: ""
}
.sap-icon--heatmap-chart::before {
  content: ""
}
.sap-icon--horizontal-bullet-chart::before {
  content: ""
}
.sap-icon--vertical-bullet-chart::before {
  content: ""
}
.sap-icon--call::before {
  content: ""
}
.sap-icon--download-from-cloud::before {
  content: ""
}
.sap-icon--upload-to-cloud::before {
  content: ""
}
.sap-icon--jam::before {
  content: ""
}
.sap-icon--sap-ui5::before {
  content: ""
}
.sap-icon--message-popup::before {
  content: ""
}
.sap-icon--cloud::before {
  content: ""
}
.sap-icon--horizontal-waterfall-chart::before {
  content: ""
}
.sap-icon--vertical-waterfall-chart::before {
  content: ""
}
.sap-icon--broken-link::before {
  content: ""
}
.sap-icon--headset::before {
  content: ""
}
.sap-icon--thumb-up::before {
  content: ""
}
.sap-icon--thumb-down::before {
  content: ""
}
.sap-icon--multiselect-all::before {
  content: ""
}
.sap-icon--multiselect-none::before {
  content: ""
}
.sap-icon--scissors::before {
  content: ""
}
.sap-icon--sound::before {
  content: ""
}
.sap-icon--sound-loud::before {
  content: ""
}
.sap-icon--sound-off::before {
  content: ""
}
.sap-icon--date-time::before {
  content: ""
}
.sap-icon--user-settings::before {
  content: ""
}
.sap-icon--key-user-settings::before {
  content: ""
}
.sap-icon--developer-settings::before {
  content: ""
}
.sap-icon--text-formatting::before {
  content: ""
}
.sap-icon--bold-text::before {
  content: ""
}
.sap-icon--italic-text::before {
  content: ""
}
.sap-icon--underline-text::before {
  content: ""
}
.sap-icon--text-align-justified::before {
  content: ""
}
.sap-icon--text-align-left::before {
  content: ""
}
.sap-icon--text-align-center::before {
  content: ""
}
.sap-icon--text-align-right::before {
  content: ""
}
.sap-icon--bullet-text::before {
  content: ""
}
.sap-icon--numbered-text::before {
  content: ""
}
.sap-icon--co::before {
  content: ""
}
.sap-icon--ui-notifications::before {
  content: ""
}
.sap-icon--bell::before {
  content: ""
}
.sap-icon--cancel-share::before {
  content: ""
}
.sap-icon--write-new-document::before {
  content: ""
}
.sap-icon--write-new::before {
  content: ""
}
.sap-icon--cancel::before {
  content: ""
}
.sap-icon--screen-split-one::before {
  content: ""
}
.sap-icon--screen-split-two::before {
  content: ""
}
.sap-icon--screen-split-three::before {
  content: ""
}
.sap-icon--customize::before {
  content: ""
}
.sap-icon--user-edit::before {
  content: ""
}
.sap-icon--source-code::before {
  content: ""
}
.sap-icon--copy::before {
  content: ""
}
.sap-icon--paste::before {
  content: ""
}
.sap-icon--line-chart-time-axis::before {
  content: ""
}
.sap-icon--clear-filter::before {
  content: ""
}
.sap-icon--reset::before {
  content: ""
}
.sap-icon--trend-up::before {
  content: ""
}
.sap-icon--trend-down::before {
  content: ""
}
.sap-icon--cursor::before {
  content: ""
}
.sap-icon--add-document::before {
  content: ""
}
.sap-icon--create-form::before {
  content: ""
}
.sap-icon--resize-corner::before {
  content: ""
}
.sap-icon--chevron-phase::before {
  content: ""
}
.sap-icon--chevron-phase-2::before {
  content: ""
}
.sap-icon--rhombus-milestone::before {
  content: ""
}
.sap-icon--rhombus-milestone-2::before {
  content: ""
}
.sap-icon--circle-task::before {
  content: ""
}
.sap-icon--circle-task-2::before {
  content: ""
}
.sap-icon--project-definition-triangle::before {
  content: ""
}
.sap-icon--project-definition-triangle-2::before {
  content: ""
}
.sap-icon--master-task-triangle::before {
  content: ""
}
.sap-icon--master-task-triangle-2::before {
  content: ""
}
.sap-icon--program-triangles::before {
  content: ""
}
.sap-icon--program-triangles-2::before {
  content: ""
}
.sap-icon--mirrored-task-circle::before {
  content: ""
}
.sap-icon--mirrored-task-circle-2::before {
  content: ""
}
.sap-icon--checklist-item::before {
  content: ""
}
.sap-icon--checklist-item-2::before {
  content: ""
}
.sap-icon--checklist::before {
  content: ""
}
.sap-icon--checklist-2::before {
  content: ""
}
.sap-icon--chart-table-view::before {
  content: ""
}
.sap-icon--filter-analytics::before {
  content: ""
}
.sap-icon--filter-facets::before {
  content: ""
}
.sap-icon--filter-fields::before {
  content: ""
}
.sap-icon--indent::before {
  content: ""
}
.sap-icon--outdent::before {
  content: ""
}
.sap-icon--heading-1::before {
  content: ""
}
.sap-icon--heading-2::before {
  content: ""
}
.sap-icon--heading-3::before {
  content: ""
}
.sap-icon--decrease-line-height::before {
  content: ""
}
.sap-icon--increase-line-height::before {
  content: ""
}
.sap-icon--animate-spin {
  display: inline-block;
  -webkit-animation: sap-icon-spin 2s infinite linear;
  animation: sap-icon-spin 2s infinite linear
}
.sap-icon--animate-pulse {
  display: inline-block;
  -webkit-animation: sap-icon-spin 2s infinite steps(8);
  animation: sap-icon-spin 2s infinite steps(8)
}
@-webkit-keyframes sap-icon-spin {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0)
  }
  100% {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg)
  }
}
@keyframes sap-icon-spin {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0)
  }
  100% {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg)
  }
}
`
export default styles
