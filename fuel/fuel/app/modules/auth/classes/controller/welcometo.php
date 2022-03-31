<?php

namespace Auth;

class Controller_Welcometo extends \Controller
{
	
	public function action_index()
	{
		return \Response::forge(\View::forge('\welcome/index'));
	}


	public function action_helloh()
	{

		return \Response::forge(\Presenter::forge('\welcome/hello'));
	}

}
