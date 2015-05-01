#
# Vars
#

NODE_BIN = ./node_modules/.bin

#
# Tasks
# 

# validate:
# 	@${NODE_BIN}/noiit test/*.js
# 	@${NODE_BIN}/jshint lib/** test/**

clean: 
	@rm node_modules/lib

link: clean
	@ln -s ${PWD}/lib node_modules/lib

test: link
	@${NODE_BIN}/beefy index.jsx --live --open -- -t reactify 

ci: validate test


.PHONY: test validate