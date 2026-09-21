#!/bin/bash

# Base URL
BASE="https://navigine.com"

# Create directories
mkdir -p tracking platform sdk industries blog assets

# Download tracking images
cd tracking
curl -sL -o "tracking_5.gif" "${BASE}/assets/web/images/tracking/tracking%205.gif"
curl -sL -o "indoor_object_positioning.gif" "${BASE}/assets/web/images/tracking/Indoor-Object-Positioning.gif"
curl -sL -o "realtime_alerts.gif" "${BASE}/assets/web/images/tracking/Real-time-Alerts.gif"
curl -sL -o "track_assets_history.gif" "${BASE}/assets/web/images/tracking/Track-Assets-History.gif"
curl -sL -o "asset_searching_1080.gif" "${BASE}/assets/web/images/tracking/1080/asset-searching1080.gif"
curl -sL -o "analytics_1080.gif" "${BASE}/assets/web/images/tracking/1080/analytics1080.gif"
curl -sL -o "software_customization_1080.gif" "${BASE}/assets/web/images/tracking/1080/software-customization1080.gif"
curl -sL -o "multi_level_480.gif" "${BASE}/assets/web/images/tracking/1080/multi-level-buildings480.gif"
curl -sL -o "3d_platform_480.gif" "${BASE}/assets/web/images/tracking/1080/3d-platform480.gif"
curl -sL -o "indoor_outdoor_1080.gif" "${BASE}/assets/web/images/tracking/1080/ransition-from-indoor-to-outdoor1080.gif"
cd ..

echo "Downloaded tracking images"
ls -la tracking/
