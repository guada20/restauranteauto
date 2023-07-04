import pandas as pd 

from Data.platos import platosPopulares

tablaPlatos=pd.DataFrame(platosPopulares)
print(tablaPlatos)