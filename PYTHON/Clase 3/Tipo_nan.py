import math
import decimal

# NaN (Not a Number)
a = float('nan')
print(f'a: {a}')

# Módulo math
a = float('nan')
print(f'¿Es a NaN (Not a Number)? : {math.isnan(a)}')

# NaN (Not a Number) usando Decimal
a = decimal('nan')
print(f'a: {a}')
print(f'¿Es a NaN (Not a Number)? : {a.is_nan()}') # Verificación si es NaN usando math.isnan no es posible directamente con Decimal
