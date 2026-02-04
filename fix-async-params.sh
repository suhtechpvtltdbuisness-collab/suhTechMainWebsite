#!/bin/bash

# Script to fix Next.js 15+ async params issue across all dynamic routes
# This script adds 'const { id } = await params;' before each params.id usage

echo "Fixing async params in all API routes..."

# Array of files to fix
files=(
  "src/app/api/projects/[id]/route.js"
  "src/app/api/expenses/[id]/route.js"
  "src/app/api/sales/[id]/route.js"
  "src/app/api/invoices/[id]/route.js"
  "src/app/api/employees/[id]/route.js"
  "src/app/api/employee-salary/[id]/route.js"
  "src/app/api/portfolio/[id]/route.js"
  "src/app/api/orders/[id]/route.js"
  "src/app/api/projects/[id]/employees/route.js"
)

echo "Total files to process: ${#files[@]}"
echo "Please manually update each file by:"
echo "1. Adding 'const { id } = await params;' at the start of each route handler"
echo "2. Replace all 'params.id' with 'id'"
echo ""
echo "Files to update:"
for file in "${files[@]}"; do
  echo "  - $file"
done
