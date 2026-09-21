#!/bin/bash
BASE="https://www.blueiot.com"

# Create directories
mkdir -p platform banners solutions icons

# Download platform images
cd platform
curl -sL -o "rtls_platform_1.jpg" "${BASE}/uploads/image/v2/rtls/demokit.png"
curl -sL -o "aoa_anchor.png" "${BASE}/uploads/image/v2/tag/full-rtls/AoA%20Anchors.avif"
curl -sL -o "bluetooth_tags.png" "${BASE}/uploads/image/v2/tag/full-rtls/Rectangle%20542.avif"
curl -sL -o "positioning_engine.png" "${BASE}/uploads/image/v2/tag/full-rtls/Positioning%20Engine.avif"
curl -sL -o "real_time_trajectory.png" "${BASE}/uploads/image/v2/platform/basic/real-time-trajectory.avif"
curl -sL -o "trajectory_playback.png" "${BASE}/uploads/image/v2/platform/added/Trajectory%20Playback.avif"
curl -sL -o "mobile_applications.png" "${BASE}/uploads/image/v2/platform/mobile-applications1.avif"
curl -sL -o "system_banner.png" "${BASE}/uploads/image/version/banner.avif"
curl -sL -o "banner_new.png" "${BASE}/uploads/image/version/banner-new.avif"
cd ..

# Download banner images
cd banners
curl -sL -o "manufacturing.jpg" "${BASE}/uploads/image/20240905/17/banner0903manufacturing.jpg"
curl -sL -o "logistics.jpg" "${BASE}/uploads/image/20240905/17/banner0903logistics.jpg"
curl -sL -o "healthcare.jpg" "${BASE}/uploads/image/20240905/17/banner0903healthcare.jpg"
curl -sL -o "museum.jpg" "${BASE}/uploads/image/20240905/17/banner0903museumexhibition.jpg"
curl -sL -o "sports.jpg" "${BASE}/uploads/image/20240905/17/banner0903sportsevents.jpg"
curl -sL -o "entertainment.jpg" "${BASE}/uploads/image/20240905/17/banner0903entertainment.jpg"
curl -sL -o "hospital.jpg" "${BASE}/uploads/image/20240905/17/banner0903hospital.jpg"
curl -sL -o "transportation.jpg" "${BASE}/uploads/image/20240905/17/banner0903airporttrainstation.jpg"
curl -sL -o "parking.jpg" "${BASE}/uploads/image/20240905/17/banner0903parkingspace.jpg"
cd ..

# Download solution/feature images
cd solutions
curl -sL -o "how_it_works.png" "${BASE}/uploads/image/20230413/15/how-does-rtls-work.png"
curl -sL -o "how_it_works_small.png" "${BASE}/uploads/image/20230413/15/how-does-rtls-work-small.png"
curl -sL -o "manufacturing_safety.jpg" "${BASE}/uploads/image/20211225/14/guarantee-safety.jpg"
curl -sL -o "manufacturing_order.jpg" "${BASE}/uploads/image/20211225/14/maintain-order.jpg"
curl -sL -o "manufacturing_efficiency.jpg" "${BASE}/uploads/image/20211225/14/boost-efficiency.jpg"
curl -sL -o "logistics_people.jpg" "${BASE}/uploads/image/20220111/16/people-management.jpg"
curl -sL -o "logistics_vehicles.jpg" "${BASE}/uploads/image/20220111/16/vehicles-and-mobile-equipment.jpg"
curl -sL -o "logistics_goods.jpg" "${BASE}/uploads/image/20220111/16/goods-and-materials.jpg"
curl -sL -o "museum_paradise.jpg" "${BASE}/uploads/image/20220114/13/paradise-for-both-parents-and-children.jpg"
curl -sL -o "museum_management.jpg" "${BASE}/uploads/image/20220114/13/optimized-management.jpg"
curl -sL -o "museum_profits.jpg" "${BASE}/uploads/image/20220114/13/data-maximizes-profits.jpg"
curl -sL -o "sports_locating.jpg" "${BASE}/uploads/image/20211225/14/real-time-locating.jpg"
curl -sL -o "sports_efficiency.jpg" "${BASE}/uploads/image/20211225/14/improved-management-efficiency.jpg"
curl -sL -o "sports_safety.jpg" "${BASE}/uploads/image/20211225/14/safety-and-security.jpg"
curl -sL -o "transportation_management.jpg" "${BASE}/uploads/image/20211225/15/systematic-management.jpg"
curl -sL -o "transportation_services.jpg" "${BASE}/uploads/image/20211225/15/high-quality-services.jpg"
curl -sL -o "transportation_safety.jpg" "${BASE}/uploads/image/20211225/15/safety-and-health.jpg"
curl -sL -o "parking_efficient.jpg" "${BASE}/uploads/image/20211225/14/efficient-management.jpg"
curl -sL -o "parking_customer.jpg" "${BASE}/uploads/image/20211225/14/improve-customer-experience.jpg"
curl -sL -o "healthcare_asset.jpg" "${BASE}/uploads/image/20230911/14/asset-management.jpg"
curl -sL -o "healthcare_patient.jpg" "${BASE}/uploads/image/20230911/14/patient-experience.jpg"
curl -sL -o "healthcare_infant.jpg" "${BASE}/uploads/image/20220111/16/infant-protection.jpg"
cd ..

echo "Blueiot download complete!"
ls -laR
