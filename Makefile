site:
	mkdocs build

publish:
	mkdocs gh-deploy --force

serve:
	mkdocs serve

clean:
	$(RM) -rf site
