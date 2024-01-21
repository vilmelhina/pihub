# PiHub

A home hub running on a Raspberry Pi.


## Deploying the app
On the Raspberry Pi, the following structure is expected:
```
~/pihub-run
 ├── ClimateAPI
 │   ├── climate.py
 │   ├── climateserver.py
 │   └── startserver.sh
 ├── PiHubWeb
 │   └── build
 │       └── ...
 └── run.sh
```
Using `deploy.sh` should ensure this structure on the pi.

To update the app, run `npm run build` in `PiHubWeb`, and then run `deploy.sh`. This can be done while the app is running.


## Running at startup
To run the server at startup, the following line is added to crontab:
```
@reboot /home/vila/pihub-run/run.sh
```
To open the web page in full screen at startup, in `~/.config/lxsession/LXDE-pi/autostart` the following line is added:
```
@chromium-browser --start-fullscreen http://localhost:5000/
```