#!/bin/bash

# Uso: ./subir.sh "mensaje del commit"
# Si no pasas mensaje, usa uno con la fecha y hora.

MENSAJE="${1:-Actualización $(date '+%Y-%m-%d %H:%M')}"
RAMA=$(git branch --show-current)

echo ">> Agregando cambios..."
git add .

echo ">> Haciendo commit: $MENSAJE"
git commit -m "$MENSAJE" || echo "(No hay cambios nuevos para commitear)"

echo ">> Trayendo cambios de GitHub (pull --rebase)..."
git pull --rebase origin "$RAMA" || { echo "Error en el pull. Resuelve los conflictos y vuelve a ejecutar."; exit 1; }

echo ">> Subiendo a GitHub..."
git push origin "$RAMA" || { echo "Error en el push."; exit 1; }

echo ">> Listo."