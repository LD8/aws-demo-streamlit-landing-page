```bash
# init virtual env
python3 -m venv env
# activate venv
source env/bin/activate

pip install streamlit
# Install package in editable mode
pip install -e .

# run backend server
streamlit run app.py


# install frontend packages
cd streamlit_landing/frontend
npm install
# start frontend server
npm run start
```
