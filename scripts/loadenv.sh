echo 'Creating Python virtual environment ".venv" in root'
python3 -m venv .venv

echo 'Installing Python dependencies from requirements.txt'
./.venv/bin/python -m pip install -r requirements.txt