import streamlit as st
import random
import time
from gambleo_pro import tiradados, CombiDados
# ----------------------------
# PAGE CONFIGURATION
# ----------------------------
st.set_page_config(
    page_title="Dados Pro Oca",  # Browser tab title
    layout="centered",           # Center layout
    initial_sidebar_state="auto"
)

# ----------------------------
# TITLE AND DESCRIPTION
# ----------------------------
st.title("🎲 Dados Pro Oca")         # Large title
st.subheader("")  # Smaller subtitle

# ----------------------------
# PLACEHOLDERS FOR IMAGES AND RESULT
# ----------------------------
# These placeholders allow us to update content dynamically

col1, col2, col3 = st.columns([1,2,1])
dice_placeholder = col2.empty()
dice_placeholder2 = col2.empty()
result_placeholder = col2.empty()

# ----------------------------
# BUTTON TO ROLL DICE
# ----------------------------
n=[]
movess=0
counts=[]
with col2:
    if st.button("Lanzar"):
        # Simple animation loop
        for _ in range(7):
            # Generate random dice numbers
            d1 = random.randint(1, 6)
            d2 = random.randint(1, 6)
            d3 = random.randint(1, 6)
            d4 = random.randint(1, 6)
            d5 = random.randint(1, 6)
            n=[d1, d2, d3, d4, d5]
            # Display dice images
            dice_placeholder.image(
                [f"DadoMagico/images/dice{d1}.jpg", f"DadoMagico/images/dice{d2}.jpg", f"DadoMagico/images/dice{d3}.jpg"], width=50
            )
            dice_placeholder2.image([f"DadoMagico/images/dice{d4}.jpg",f"DadoMagico/images/dice{d5}.jpg"], width=50
            )
            time.sleep(0.07)  # small delay to simulate animation
    
    # Final decision based on dice total
    
    counts = tiradados(n)
    movess = CombiDados(counts)
    result_placeholder.markdown(f"### Numero de movimientos: {movess}")
    
    
    

# ----------------------------
# OPTIONAL: Sidebar Controls
# ----------------------------
st.sidebar.title("Settings")
st.sidebar.write("You can add options here later, e.g., change dice images or animation speed.")
#streamlit run app.py
# ----------------------------
# FOOTER OR NOTES
# ----------------------------

