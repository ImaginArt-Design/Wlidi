@echo off
setlocal
cd /d "%~dp0"
title Wlidi - وليدي

:: Déblocage automatique de la marque du web (SmartScreen)
powershell -NoProfile -ExecutionPolicy Bypass -Command "if (Test-Path 'Wlidi.exe') { Unblock-File -LiteralPath 'Wlidi.exe' }" 2>nul

:: Lancement de l'application Wlidi
start "" "%~dp0Wlidi.exe"
exit /b 0
